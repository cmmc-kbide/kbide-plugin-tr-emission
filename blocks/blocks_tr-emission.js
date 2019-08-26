Blockly.Blocks["ky_005_tr_emission_block"] = {
    init: function() {
      this.appendDummyInput().appendField("KY-005 TR EMISSION");
      this.appendDummyInput()
        .appendField("CODE")
        .appendField(
          new Blockly.FieldTextInput("0xa90"),
          "KY_005_TR_EMISSION_CODE"
        )
        .appendField("VALUE")
        .appendField(
          new Blockly.FieldTextInput("12"),
          "KY_005_TR_EMISSION_VALUE"
        );
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };