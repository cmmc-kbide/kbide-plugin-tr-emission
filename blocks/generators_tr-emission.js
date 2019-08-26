Blockly.JavaScript["ky_005_tr_emission_block"] = function(block) {
    var text_ky_005_tr_emission_code = block.getFieldValue(
      "KY_005_TR_EMISSION_CODE"
    );
    var text_ky_005_tr_emission_value = block.getFieldValue(
      "KY_005_TR_EMISSION_VALUE"
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
    #EXTINC
	#include <IRremote.h>
	IRsend irsend;
	#END

	irsend.sendSony(${text_ky_005_tr_emission_code}, ${text_ky_005_tr_emission_value}); // Sony TV power code
    `;
    return code;
  };