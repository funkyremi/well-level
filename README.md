# Well Level

Well water level as an API ⛲️.

## Hardware

I used a Raspberry Pi Zero WH and 4 Float Sensor Switches.

## Configuration

Edit the GPIO pins in `well.js`.

## Start the service

`docker-compose up -d`

## Fetch the API

You can get the water level by fetching `http://<DEVICE_IP>:3000/`.

Here's the result you get:

```json
{
    "levelLow": 1,
    "levelMiddle": 1,
    "levelHigh": 0,
    "levelFlood": 0
}
```

## Contribute

```
npm install
npm start
```
