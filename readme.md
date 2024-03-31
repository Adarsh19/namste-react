oct 11 completed episode 1
oct 16 completed episode 2
oct 16 completed episode 3
oct 17 pending 30:00 ==> need to take css



**** ep2part2 contain parcel and react installation *****

  
npm init

>>>>>>>After this you will get package.json as configuration

Now need to install Bundler

>>>>>>>>Webpack, parsel, vite help to bundle our app to ship it to production. Create react app use webpack and bable behind the scene


npm install -D parcel

>>>>>>>>> -D is dependencies. Their r 2 type of dev dependencies and normal dependency. Here it is Dev  dependency

>>>>>>>>>> After you run this we will get another package-lock.json. Which contain all dependencies and that dependencies(Transitive dependencies). And we get a nodemodule folder. 

npx parcel index.html 

>>>>>>>>>>> This will host the app into the server. NPX mean executing a package. Parcel what it did is go to the source file and executed the file

npm install react

>>>>>>>>>>> This will install react as normal dependency

npm install react-dom

>>>>>>>>>>>> This will install react dom also. npm i is the short form of install

## Browser scripts cannot have imports or exports.

>>>>>>>>>>>> in order to fix this you have to write <script type="module" src="./app.js"></script> type="module" in index.html file. So it will understand that it is a module not a file

## Parcel
- dev build
- local server
- HMR hot module replacment, live refresh in layman language.
- File watching algorithm - written in c++
- image optimizantion
- minification 
- Bundling
- Compress
- error handling
- HTTPS
- Tree shaking  --remove unused code
- Diffrent dev and prod bundles


  1             2               3              4  
local   ---> git hub   --->   Server --->   End User 

>>>>>>>>> Make app compactible with older browser user browserlist. To checked for the version and tags visit to https://browserslist.dev

>>>>>>>>> Insted of writing again and again npx parcel index.html  we can create a script in package.json which will execute the code like 
      >>> npm run start or we can write >>>> npm start.
******************************
EP3 PART 2
******************************
## JSX
JSX are not HTML in js. But it is HTML like syntex or XML like.

>>>>>> We don't have to write everytime React.createElement()

const jsxHeading = <h1> This is a heading</h1>;


  >> JS engine doesnot understand the JSX code. Js engine only understand ecma script (ES). 
  >> How it is working? 
  >> Answer is parcel is doing the job behind the scene. JSX code is transpile before it reaches the JS Engine. Transpile meaning that this code    is  converted into the code that react can understand. And that is done by parcel which is like a manager, and this will give its responsiblity to  Babel. Babel will transpile the code in such a way that js engine will understand. So Babel is a sort of compiler


   1         2           3            4              5   
  JSX >>>> Parcel >>>> Babel >>>> React Code >>>> JS Engine 


  >>> Class should be written as className

  >>>> JSX if we want to write in multiple line we have to wrap into round brackets example:

  const jsxHeading = (
        <h1 className="head"> 
        test multi line heading
        </h1>    
  );


## React Component 1: 07: 04

Every thing like search bar, tool bar header all is component. 

Their are 2 type of component
a) Class based compoinent >>> old way of writing the code
b) Funtional component >>> This is latest way



>>> Funtional component : It is just a JS function. It shoulsd always return JSX
Always create a functional component with const Heading here H should be capital.
It should return an JSX.

const FunctionalComponent = () => {
    return <h1>Nameste React functional component </h1>;
};

            or Short hand
       
const FunctionalComponent = () => {
    <h1>Nameste React functional component </h1>;
};

 >> render functionl component

root.render(<FunctionalComponent />);



## write Javascript inside JSX

>>> use {} in a component

>>>> JSX will sanitise all sort of cross scripting attack















                

