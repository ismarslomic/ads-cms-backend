# Accenture Digital Signage Backend
## Routes
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
          <td><a href="http://accentureds.herokuapp.com/api/player">http://accentureds.herokuapp.com/api/player</a></td>
          <td>Read all MPs</td>
        </tr>
        <tr>
          <td>GET</td>
          <td>http://accentureds.herokuapp.com/api/player/:id</td>
          <td>Read Media Player by ID</td>
        </tr>
        <tr>
          <td>PUT</td>
          <td>http://accentureds.herokuapp.com/api/player/:id</td>
          <td>Update existing Media Player by ID</td>
        </tr>
        <tr>
          <td>POST</td>
          <td>http://accentureds.herokuapp.com/api/player</td>
          <td>Create new Media Player</td>
        </tr>
        <tr>
          <td>DELETE</td>
          <td>http://accentureds.herokuapp.com/api/player/:id</td>
          <td>Delete existing Media Player by ID</td>
        </tr>
      </tbody>
</table>

## Media Player Information Model

<code>
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
          
</code>
