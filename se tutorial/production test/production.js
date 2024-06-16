const jsPsych = initJsPsych();
let timeline = [];


const irb = {
    // Which plugin to use
    type: jsPsychHtmlButtonResponse,
    // What should be displayed on the screen
    stimulus: '<p><font size="3">We invite you to participate in a research study on language production and comprehension. Your experimenter will ask you to do a linguistic task such as reading sentences or words, naming pictures or describing scenes, making up sentences of your own, or participating in a simple language game. <br><br>There are no risks or benefits of any kind involved in this study. <br><br>You will be paid for your participation at the posted rate.<br><br>If you have read this form and have decided to participate in this experiment, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at anytime without penalty or loss of benefits to which you are otherwise entitled. You have the right to refuse to do particular tasks. Your individual privacy will be maintained in all published and written data resulting from the study. You may print this form for your records.<br><br>CONTACT INFORMATION: If you have any questions, concerns or complaints about this research study, its procedures, risks and benefits, you should contact the Protocol Director XXX at XXXXXX. If you are not satisfied with how this study is being conducted, or if you have any concerns, complaints, or general questions about the research or your rights as a participant, please contact the XXXX to speak to someone independent of the research team at XXXXXXXXX or toll free at XXXXXXXX. You can also write to the XXXXXXX, University College London, ADDRESS:XXXXXXXXX<br><br>If you agree to participate, please proceed to the study tasks.</font></p>',
    // What should the button(s) say
    choices: ['Continue']
};

// push to the timeline
timeline.push(irb)


const instructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "In this stage, you will see some images, please judge the situation by instruction accordingly.",
    choices: [" "]
};
timeline.push(instructions);

const trials = {
    type: jsPsychAudioKeyboardResponse,
    choices: ['d', 'k'],
    response_allowed_while_playing: false,
    trail_duration: 4000,
    timeline: trial_objects
}
timeline.push(trials)

jsPsych.run(timeline)