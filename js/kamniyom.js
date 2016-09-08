var tar_name = $('#identity-holder > #name'),
  tar_interest = $('#identity-holder > #interest'),
  tar_stats = $('#identity-holder > #stats'),

  symbol = ["!", "@", "#", "$", "%", "&", "_", "/", "\\"],

  int_text = {
    counter: 0,
    text: '',
    frame: 1,
    buffer: ''
  },

  name_text = {
    counter: 0,
    text: '',
    frame: int_text.frame + 2,
    buffer: ''
  },

  flavour_test = [
    "Has a cool white hat.",
    "Could use some guava.",
    "Loves coding for some reason.",
    "Some say it resides in Lavender on the weekends.",
    "Some say it plays computer games",
    "Hoot. Hoot.",
    "Clicky Clicky!",
    "The Owl will not tolerate your clicking."
  ];

function setName(a) {
  var temp_text = $('.text', tar_name),
    temp_bg = $('.text-bg', tar_name);

  temp_text.width($('.text', tar_name).width());
  temp_bg.html(a);
  temp_text.width($('.text-bg', tar_name).width());
  temp_text.html('');
  name_text.text = a;
  name_text.reset = true;
}

function setInterest(a) {
  var temp_text = $('.text', tar_interest),
    temp_bg = $('.text-bg', tar_interest);

  temp_text.width($('.text', tar_interest).width());
  temp_bg.html(a);
  temp_text.width($('.text-bg', tar_interest).width());
  temp_text.html('');
  int_text.text = a;
  int_text.reset = true;
}

function animationLoop() {
  requestAnimFrame(animationLoop);

  if (name_text.reset === true) {
    name_text.reset = false;
    name_text.counter = 0;
    name_text.animation = true;
  } else if (name_text.animation === true) {
    name_text.counter++;

    var temp_counter = Math.floor(name_text.counter / name_text.frame),
      temp_max = name_text.text.length,
      temp_text = $('.text', tar_name),
      temp_display;

    if (temp_counter - 1 >= temp_max) {
      name_text.animation = false;
    } else {
      temp_display = name_text.text.slice(0, temp_counter);

      if (name_text.counter % name_text.frame === 0) {
        name_text.buffer = '';
        var temp_offset = temp_max - temp_counter - 1;
        if (temp_offset > 5) {
          temp_offset = 5
        }
        for (var i = temp_offset; i >= 0; i -= 1) {
          name_text.buffer += symbol[Math.floor(Math.random() * symbol.length)];
        }
      }
      temp_text.html(temp_display + name_text.buffer);
    }
  }

  if (int_text.reset === true) {
    int_text.reset = false;
    int_text.counter = 0;
    int_text.animation = true;
  } else if (int_text.animation === true) {
    int_text.counter++;

    var temp_counter = Math.floor(int_text.counter / int_text.frame),
      temp_max = int_text.text.length,
      temp_text = $('.text', tar_interest),
      temp_display;

    if (temp_counter - 1 >= temp_max) {
      int_text.animation = false;
    } else {
      temp_display = int_text.text.slice(0, temp_counter);

      if (int_text.counter % int_text.frame === 0) {
        int_text.buffer = '';
        var temp_offset = temp_max - temp_counter - 1;
        if (temp_offset > 5) {
          temp_offset = 5
        };
        for (var i = temp_offset; i >= 0; i -= 1) {
          int_text.buffer += symbol[Math.floor(Math.random() * symbol.length)];
        }
      }
      temp_text.html(temp_display + int_text.buffer);
    }
  }

}

animationLoop();
setName('Owly the Owl');
setInterest(flavour_test[Math.floor(Math.random() * flavour_test.length)]);

for (var i = $('.stats-desc').length; i >= 0; i -= 1) {
  $($('.stats-desc')[i]).delay(i * 200).fadeIn(350);
};

$(window).click(function() {

  int_text = {
      counter: 0,
      text: '',
      frame: 1,
      buffer: ''
    },

    name_text = {
      counter: 0,
      text: '',
      frame: int_text.frame + 2,
      buffer: ''
    };

  $('.stats-desc').hide();

  for (var i = $('.stats-desc').length; i >= 0; i -= 1) {
    $($('.stats-desc')[i]).delay(i * 200).fadeIn(350);
  };

  setName('Owly the Owl');
  setInterest(flavour_test[Math.floor(Math.random() * flavour_test.length)]);

});