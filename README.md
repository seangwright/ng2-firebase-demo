

### Notes

You will need to create a `firebase-config` file at `src/app/firebase-config.ts` with the following contents (this file is excluded from source control)

```javascript
export default {
    baseUrl: 'your-firebase-subdomain.firebaseio.com'
}
```
Below is how the data is structured in Firebase for this demo
![Firebase Data Structure](img/data-structure-in-firebase.png?raw=true "Firebase Data Structure")