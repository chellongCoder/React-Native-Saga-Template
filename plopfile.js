module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'app/components/{{dashCase name}}/index.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Component.js.hbs',
      },
      {
        type: 'add',
        path: 'app/components/{{dashCase name}}/styles.ts',
        templateFile: 'plop-templates/Styles.js.hbs',
      },
    ],
  });
  plop.setGenerator('screen', {
    description: 'Create a screen',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your screen name?',
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'app/screens/{{kebabCase name}}/index.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Screen.js.hbs',
      },
      {
        type: 'add',
        path: 'app/screens/{{kebabCase name}}/styles.ts',
        templateFile: 'plop-templates/Styles.js.hbs',
      },
    ],
  });
  plop.setGenerator('hook', {
    description: 'Create a hook',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your hook name?',
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'app/components/{{dashCase name}}/index.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Component.js.hbs',
      },
      {
        type: 'add',
        path: 'app/components/{{dashCase name}}/styles.ts',
        templateFile: 'plop-templates/Styles.js.hbs',
      },
      {
        // Add a new file
        type: 'add',
        path: 'app/tools/{{kebabCase name}}/index.tsx',
        templateFile: 'plop-templates/hook/index.js.hbs',
      },
      {
        type: 'add',
        path: 'app/tools/{{kebabCase name}}/context.tsx',
        templateFile: 'plop-templates/hook/context.js.hbs',
      },
      {
        type: 'add',
        path: 'app/tools/{{kebabCase name}}/types.tsx',
        templateFile: 'plop-templates/hook/types.js.hbs',
      },
      {
        type: 'add',
        path: 'app/hooks/use-{{kebabCase name}}.tsx',
        templateFile: 'plop-templates/hook/use-hook.js.hbs',
      },
    ],
  });
};
