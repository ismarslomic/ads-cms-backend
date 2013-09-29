# Accenture Digital Signage Backend

## Getting started
TODO: git and other operations that needs to be done to get started

## Heroku
TODO: information about the frontend app in Heroku

## API
Tip: use [Chrome Rest Console](https://chrome.google.com/webstore/detail/rest-console/cokgbflfommojglbmbpenpphppikmonn?hl=en) to test the REST API.
<table class="table table-hover table-striped">
      <thead>
        <tr>
          <th>HTTP Action</th>
          <th>Route</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>GET</td>
          <td>/api/player</td>
          <td>Read all MPs</td>
        </tr>
        <tr>
          <td>GET</td>
          <td>/api/player/:id</td>
          <td>Read Media Player by ID</td>
        </tr>
        <tr>
          <td>PUT</td>
          <td>/api/player/:id</td>
          <td>Update existing Media Player by ID</td>
        </tr>
        <tr>
          <td>POST</td>
          <td>/api/player</td>
          <td>Create new Media Player</td>
        </tr>
        <tr>
          <td>DELETE</td>
          <td>/api/player/:id</td>
          <td>Delete existing Media Player by ID</td>
        </tr>
      </tbody>
</table>

## Information Model

### Media Player

```javascript
    name: {
    type: String,
    trim: true
    },
    ip: String,
    location: {
       floor: {
           type: Number,
           min: 2,
           max: 4
       },
       zone: {
           type: String,
           default: 'external'
       }
    },
    isActive: {
       type: Boolean,
       default: false
    },
    created: {
       type: Date,
       default: Date.now
    },
    updated: {
       type: Date,
       default: Date.now
    }
          
```

### Example

```JSON
[
      {
       "name": "Ruby",
       "ip": "127.0.0.100",
       "_id": "5240cef5b17cf20200000001",
       "__v": 0,
       "updated": "2013-09-23T23:29:57.541Z",
       "created": "2013-09-23T23:29:57.540Z",
       "isActive": true,
       "location": {
           "floor": 2,
           "zone": "external"
       }
      },
      {
       "name": "Scala",
       "ip": "127.0.0.101",
       "_id": "5240cef5b17cf20200000002",
       "__v": 0,
       "updated": "2013-09-23T23:29:57.546Z",
       "created": "2013-09-23T23:29:57.546Z",
       "isActive": true,
       "location": {
           "floor": 2,
           "zone": "external"
       }
      }
]
```
