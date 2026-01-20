// This function takes:

// reactElement → a plain JavaScript object that describes what to render
// container → the DOM element where the content should be inserted

// reactElement.type contains the HTML tag name

// In this case, 'a', so it creates an <a> element
// children represents the text or content inside the element

function customRender(reactElement, container) {
//   const domElement = document.createElement(reactElement.type);
//   domElement.innerHTML = reactElement.children;
//   domElement.setAttribute('href', reactElement.props.href);
//   domElement.setAttribute('target', reactElement.props.target);

//   container.appendChild(domElement);
  
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

 for (const prop in reactElement.props) {
 
   if (prop == 'children') continue;
   domElement.setAttribute(prop,reactElement.props[prop])
 }
   container.appendChild(domElement);
}
 
// Loops through all properties inside reactElement.props

// Skips children (because children is not an HTML attribute)

// Adds each remaining prop as an attribute

// href → link URL

// target → where the link opens

//We want to render the reactElement in react we will give the tag like this.
//props(properties) we will give the attribute.
// type is the tag name.
//children is the innerText into it.
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children:'Click me to visit google',
};

const mainContainer = document.getElementById('root');
// Gets the DOM element with id root

// Calls customRender to insert the anchor tag into it

// This customRender will take two values in it firstly this reactElement  which will take the element and store into mainContainer..
customRender(reactElement, mainContainer);



// <a href="https://google.com" target="_blank">
//   Click me to visit google
// </a>;

// This is a basic React-like renderer that converts a JS object into a real DOM element.