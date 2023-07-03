
// re-export:
// {default as ComponentFour} ---import from ComponentFour
// export it: export {default as ComponentFour}

// makes positive influence for tree-shaking:

export { default as ComponentOne } from "./ComponentOne";
export { default as ComponentTwo } from "./ComponentTwo";
export { default as ComponentThree } from "./ComponentThree";
export { default as ComponentFour } from "./ComponentFour";

// everything above does the same, but reduces quantity of imports and exports 


// ============================================================================================================

// everything below is not preferable.

// import ComponentOne from './ComponentOne';
// import ComponentTwo from './ComponentTwo';
// export {
// ComponentOne,
// ComponentTwo
// }

// when we import the component, then export, tree shaking automatically pushes them into bundle. 
// Generally it loads all components. 
// even if we dont use them.
// For instance you import ComponentTwo from './components';
// it imports other not imported components as well.


// we might get rid of export default on components, but not component that uses React.lazy 

// ================================================================================================

// Lets try barel export:

// export * from "./ComponentOne";
// export * from "./ComponentTwo";
// export * from "./ComponentThree";
// export * from "./ComponentFour";
