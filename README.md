# ALIXNAEL

Necessary steps to get the application up and running.

### Ruby version
**v2.3.3**
### Configuration
  ```
  run bundle install
  ```
### Database initialization
  ```
  rails db:setup && rails db:migrate
  ```
### How to run the test suite
  ```
  rails qa
  ```

### Deployment
Every push to master is deployed automatically to [alixnael.herokuapp.com](alixnael.herokuapp.com)
