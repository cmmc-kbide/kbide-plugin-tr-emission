Blockly.Blocks['ky_005_tr_emission_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("KY-005 TR EMISSION");
    this.appendValueInput("KY_005_TR_EMISSION_PIN")
        .setCheck("Number")
        .appendField("PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};