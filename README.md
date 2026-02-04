# TREATMENT SHOP BACKEND

## How to run backend
### Prerequisites: Install Docker
- Make `.env`
```sh
make env
```
Example env:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/treatmentdb
```
- Run backend and database with container
```sh
make run-backend-container
```
- Seed data
```
make seed-data
```
---
## Docs

Host: `http://localhost:5000`
Path: `/api/v1`

Route:
`/treatments`: Get all treatments
| Name  | Type   | Required | Description |
|--------|----------|------------|------------------------------|
| page   | number | optional | หมายเลขหน้าที่ต้องการ |
| limit  | number | optional | จำนวนรายการต่อหน้า |
| name   | string | optional | filter ตามชื่อ treatment |

Example request:
```bash
curl -X GET "http://localhost:5000/api/v1/treatments?page=1&limit=10&name=facial"
```

