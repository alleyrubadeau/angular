#Why Angular?
Angular is dynamic (capable of change) and is set up to be more dynamic for users.  It is quick and allows developers to extend HTML vocabulary for your application. it is expressive, readable and quick to develop. The other frameworks work at manipulating the DOM which does not allow the application to be more dynamic by incorporating the html for change .

#What are some complaints against angular?
It is difficult to learn
The documentation is thin and suffers from a lack of  code examples
Lacking in SEO

#Is angular an MVC framework?
Yes because the page is being manipulated by the user without having to refresh the page.

#why is Jquery sort of necessary for angular?
bad practice to use jquery in angular apps. when building your own directive you would use jquery but otherwise it is already built in


#ng-model:
Directive. Binds an input, select, textarea or custom form control to a property on the scope using NgModelController

#What is dirty checking?  
Dirty checking scans the scope for any changes

#What are {{}}?
They are notations that bind expressions to elements

#what is two way binding?
connection between model and expression so that variables are in constant connection with each other.
It is updating the model and the dom on both ends
when going from model to view it is a method called $apply, when going from view to model
it is called $watch

model is backing the html
#What are Angular expressions? How do they compare to EJS/ERB tags?
Angular expressions bind data to html
2 way data binding
Like JavaScript expressions, AngularJS expressions can contain literals, operators, and variables.

Unlike JavaScript expressions, AngularJS expressions can be written inside HTML.

Unlike JavaScript expressions, AngularJS expressions do not support conditionals, loops, or exceptions.

Unlike JavaScript expressions, AngularJS expressions support filters.

#What happens when you write invalid code in an expression? What type of error do you get?
You do not get an error it just doesnt render, no error in the console.

#What are Angular filters? Name 4 built-in filters, including one that we haven't used yet.
way of modifying expressions before they are rendered 
currency, number, uppercase, lowercase, decorate
