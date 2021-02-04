const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "username",
    message: "请输入用户名",
    default: "",
    validate(val) {
      if (val === "") return false;
      return true;
    },
  },
  {
    type: "confirm",
    name: "is18",
    message: "是否18岁",
    default: false,
  },
  {
    type: "list",
    name: "education",
    message: "学历",
    choices: ["高中", "大专", "本科", "研究生"],
  },
  {
    type: "checkbox",
    name: "hobby",
    message: "爱好",
    choices: ["读书", "电影", "八卦", "星运"],
  },
];

inquirer.prompt(questions).then((answer) => {
  console.log(answer);
});
