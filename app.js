var blessed = require('blessed');

var screen = blessed.screen({
  smartCSR: true
});

screen.title = "CLIra";

screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

var box = blessed.box({
  top: "center",
  left: "center",
  width: "90%",
  height: "90%",
  content: "Welcome to {bold}CLIra{/bold}!",
  tags: true,
  border: {
    type: 'line'
  },
  style: {
    fg: 'white',
    bg: 'blue',
    border: {
      fg: '#f0f0f0'
    },
    hover: {
      bg: 'green'
    }
  }
});


screen.append(box);
box.focus();


screen.render();
