const { addLessLoader, override } = require("customize-cra");

module.exports = override(
  addLessLoader({
    lessOptions: {
      modifyVars: {
        "@primary-color": "#F76C6C", // for example, you use Ant Design to change theme color.
      },
      javascriptEnabled: true,
    },
  })
);
