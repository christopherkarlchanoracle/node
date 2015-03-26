/*========================================================================================================+
 | Copyright (c) 2008, 2015, Oracle and/or its affiliates. All rights reserved.                           |
 +========================================================================================================+
 |                                                                                                        |
 |                                                                                                        |
 | Provided on an 'as is' basis, without warranties or conditions of any kind, either express or implied, |
 | including, without limitation, any warranties or conditions of title, non-infringement,                |
 | merchantability, or fitness for a particular purpose. You are solely responsible for determining the   |
 | appropriateness of using and assume any risks. You may not redistribute.                               |
 |                                                                                                        |
 | Please refer to http://www.ateam-oracle.com/a-team-chronicles for details                              |
 |                                                                                                        |
 | HISTORY                                                                                                |
 | 1.0 26-03-2015 Christopher Karl Chan (A-Team Cloud Solution Architects) CREATED                        |
 |                                                                                                        |
 +=======================================================================================================*/
var censor = require("sensorify");
console.log(censor.getCensoredWords());
console.log(censor.censor("Some very sad, bad and mad text."));
censor.addCensoredWord("gloomy");
console.log(censor.getCensoredWords());
console.log(censor.censor("A very gloomy day."));