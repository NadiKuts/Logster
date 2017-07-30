# Logster
Track your sugar level and share it with your doctor and family :)
![alt text](/app/images/UI.png)

### What it does
People suffer from diabetes can already log lots of data (calories, carbs, sugar level etc), but for normal people , especially the ones that were just diagnosed with the disease it is very hard to gain valuable insights. Patience need a doctor to look at the data, analyze and make recommendations regarding the current state of the patience.

People can use Alexa to ask Logster to record their sugar readings or to fetch some of the collected data from your journal and send it to your doctor or family. It creates a interactive graph in web application where your can see all recorded events.

You can either say all request in one sentence or have a conversation with Alexa when it will ask you for necessary details. It also supports many different natural variations of the same phrase so you shouldn't think about saying the exact command.

More specifically the dialog with Alexa can be something like this:

Person: "Alexa, ask Logster to send a report" Alexa: "For what period of time?" Person: "For the last 10 days" Alexa: "Who should I send report to?" Person: "My doctor" Alexa: "Ok, report sent to your doctor"

### Used technologies
**Client Side**
* HTML, CSS, JavaScript
* AngularJS
* AngularJS Material https://material.angularjs.org/

**Server Side**
* Nodejs + Express + postgre to manage routes and store the data
* 'Alexa-app' and 'gmail-send' npm packages to create custom Alexa Skill
* Hosted on Heroku

https://github.com/AleksShirokov/HealthHack


