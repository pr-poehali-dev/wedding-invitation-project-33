import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    """Сохранение RSVP-ответа гостя в базу данных."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    headers = {'Access-Control-Allow-Origin': '*'}

    if event.get('httpMethod') == 'GET':
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cur = conn.cursor()
        cur.execute(
            "SELECT id, name, attend, guests, wishes, created_at FROM rsvp_responses ORDER BY created_at DESC"
        )
        rows = cur.fetchall()
        cur.close()
        conn.close()
        result = [
            {
                'id': r[0],
                'name': r[1],
                'attend': r[2],
                'guests': r[3],
                'wishes': r[4],
                'created_at': r[5].isoformat() if r[5] else None,
            }
            for r in rows
        ]
        return {'statusCode': 200, 'headers': headers, 'body': json.dumps(result, ensure_ascii=False)}

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    attend = body.get('attend', '').strip()
    guests = int(body.get('guests', 1))
    wishes = body.get('wishes', '').strip()

    if not name or attend not in ('yes', 'no'):
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Укажите имя и ответ'}, ensure_ascii=False)
        }

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO rsvp_responses (name, attend, guests, wishes) VALUES (%s, %s, %s, %s) RETURNING id",
        (name, attend, guests, wishes)
    )
    new_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'success': True, 'id': new_id}, ensure_ascii=False)
    }
