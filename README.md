# Paws & Play
##### WDI Group Project
Created by Charles Jewell, Hassan Iskaf, Marisa Minsk, and Ana Barreto

## Project Overview

![Screenshot of homepage](https://cloud.githubusercontent.com/assets/24986945/26213218/247315f2-3bf0-11e7-98fe-ddd09d3cf0e9.png)

Paws and Play is an app designed to match dogs whose owners do not have time to walk them with dog lovers who want to walk a nearby dog. Users can sign in, submit their dog with its availbale walk dates if they have one. If they don't have a dog they can view all the dogs, filter them by breed and request to walk one that they like the look of. The app can be viewed here: https://dogwalkingapp.herokuapp.com/

![larger homepage](https://cloud.githubusercontent.com/assets/24986945/26213333/8c202f5a-3bf0-11e7-9efd-92dc1f485479.png)

## Brief

We were given a week to work together in a group of four to complete our app.
We were required to:

* **Use Mongo & Express** to build an API and a front-end that consumes it
* **Create an API using at least 2 related models**, one of which should be a user
* Include **all major CRUD functions** in a **RESTful API** for at least one of those models
* **Consume our own API** by making a front-end with HTML, Javascript, & AngularJS.
* **Add authentication to our API** to restrict access to appropriate users
* **Craft thoughtful user stories together**, as a team
* **Manage team contributions and collaboration** using a standard Git flow on Github
* Layout and style your front-end with **clean & well-formatted CSS**
* **Deploy your application online** so it's publically accessible

## Planning

Once the idea was finalised, we began to explore what the user experience of the app would be. We discussed the features that would be included both within the MVP and on top of the MVP. Part of this process included drawing up some wireframes.

![wireframes1](https://cloud.githubusercontent.com/assets/24986945/26078750/6cada916-39b8-11e7-8564-060f749f17a8.png)

![wireframes2](https://cloud.githubusercontent.com/assets/24986945/26078801/91ca88b8-39b8-11e7-96c0-68fa8616477c.png)

We also decided on the models and their relationships at this stage, as well as allocating some of the tasks that needed to be completed on our group trello board.

![trello](https://cloud.githubusercontent.com/assets/24986945/26078314/fc03ad88-39b6-11e7-8ddf-f09e38ba9c58.png)

## My role in building the app:

### Building and testing the API

#### Models

To create the API I initially created two main models, one for the Dog and one for the User. The Dog model referenced the User as an owner, and contained a Walk model embedded in it. The Walk model referenced the User model for those who had made requests (and had them accepted).

```
const dogSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  breed: { type: String, required: true },
  description: { type: String },
  image: { type: String, required: true },
  size: {type: String },
  walks: [{
    date: Date,
    requests: [{
      walker: { type: mongoose.Schema.ObjectId, ref: 'User' }
    }],
    accepted: { type: mongoose.Schema.ObjectId, ref: 'User' }
  }]
},{
  timestamps: true
});
```
The User model contained standard fields you might expect a user to have, including a Password Hash for authentication. It also contained a array where the Dogs that the User owned would be pushed into the Show rute for the user was accessed. Furthermore there was another array, messages, where the a message would be pushed on having a walk request accepted.

```
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  image: { type: String },
  location: { type: String, required: true },
  mobile: {type: Number },
  messages: [],
  passwordHash: { type: String, required: true },
  dogs: []
});
```

#### Routes and Controllers

I also built the back-end controllers, including the authentication controllers as well as those for all the end points. One controller function worth highlighting is the Walk confirmation. This allows a dog's owner to accept a particular request from a certain user to walk the dog on a certain day. It then removes the request of that day, and sends a message to the user who made the request. 

```
function walkConfirm(req, res, next) {

  const walker = User
  .findById(req.body.request.walker._id)
  .exec();

  const dog = Dog
  .findById(req.body.dog._id)
  .populate('owner')
  .exec();

  Promise.all([walker, dog])
  .then(values => {
    const walker        = values[0];
    const dog           = values[1];
    const requestDate   = new Date(req.body.walk.date);
    const indexToRemove = dog.walks.findIndex(walk => {
      return walk.date.getDate() === requestDate.getDate();
    });

    walker.messages.push(`You'll be walking ${dog.owner.username}'s dog, ${dog.name}, on ${requestDate.toDateString()}.`);
    walker.save();

    dog.walks.splice(indexToRemove, 1);
    dog.save();
  })
  .catch(next);
}
```

#### Testing

Part of the process of building the API included building and running tests, so we could be sure later on that the API was fully functional. For this I set up around 50 tests that tested all the end points for the dog routes, the user routes and authentication routes. This included testing whether I would get back the correct response, the correct arrat or object with the correct keys and values. As well as if I would get the correct error should an error be expected.

However, all of this was done at an early stage. And later in the project we were required to change some aspects of our API, and due to time constraints some of the tests were not rewritten to adapt to the changes in our API. Regardless of this, the tests that were written were quite comprehensive in testing our initial API.

### Front end functionality

#### Dog Index page

On the index page where all of the dogs were displayed. We decided to build a filter function where the dogs could be searched by size of breed. There were icons to select the big, medium or small dogs, and you could type in a breed in the search bar. It was also important when building this that all of the dgs were displaying until any of the filter options became active by clicking on them. This all happened in the Dogs index controller.

```
DogIndexCtrl.$inject = ['Dog', 'filterFilter', '$scope'];
function DogIndexCtrl (Dog, filterFilter, $scope) {
  const vm      = this;

  Dog
    .query()
    .$promise
    .then(dogs => {
      vm.dogs = dogs;
      filterDogs();
    });

  function filterDogs() {
    const params = { breed: vm.q };
    if (vm.small) params.size  = 'small';
    if (vm.medium) params.size = 'medium';
    if (vm.large) params.size  = 'large';

    vm.filtered = filterFilter(vm.dogs, params);
  }

  $scope.$watchGroup([
    () => vm.small,
    () => vm.medium,
    () => vm.large,
    () => vm.q
  ], filterDogs);

  vm.filterDogs = filterDogs;
}
```

#### Walk selection page

I also built the modal for selecting the desired walk date that is opened on the Dog's show page. We decided having this as a pop-up modal would make for a better user experience. Within the controller for this page is the function:

```
function walkRequest() {
    Dog
    .selectWalk($stateParams, { date: vm.select })
    .$promise
    .then(dog => {
      vm.close();
    })
    .catch(err => {
      console.log(err);
    });
  }
  
```
  
  Where 'selectWalk' is a custom action in the Dog factory:
  
```
  Dog.$inject = ['API', '$resource'];
function Dog(API, $resource) {
  return $resource(`${API}/dogs/:id`,
    { id: '@_id' },
    {
      'update': { method: 'PUT' },
      'addWalk': { method: 'PUT', url: `${API}/dogs/:id/walks`},
      'selectWalk': { method: 'PUT', url: `${API}/dogs/:id/walks/select`}
    }
  );
}
```
We found that due to the way our front-end was structured with most actions related to the Walk happening on the Dog and User show pages that we needed to create a number of custom actions in the Dog and User factories.

## Further Development

In the future I would like to return to this project and make some additions. I would to add a location property to the dogs, where users could search and filter dog's by location. I could also incorporate the Google Maps API where the locations of the Dog's would display on a map.

I would also like to retroactively rewrite some of the tests that became redundant when we made some changes to our API late in the project.




