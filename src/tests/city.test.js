const request = require('supertest');
const app = require('../app');

test('GET /cities debe traer todas las ciudades', async () => {
const res = await request(app).get('/cities');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
})
// Cambio

test('POST /debe crear una ciudad', async () => {
    const newCity = {
        name:"Veracruz",
        country:"Mexico",
        isCapital: false
    }
    const res = await request(app).post('/cities').send(newCity)
    expect(res.status).toBe(201)
    expect(res.id).toBeDefined()
    expect(res.name).toBe(newCity.name)
})