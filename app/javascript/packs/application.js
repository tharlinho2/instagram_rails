import Rails from "@rails/ujs";
import * as ActiveStorage from "@rails/activestorage";
import "channels";

import "../src/application.css";

// import "./flashMessages";
// import "./modal";
// import "./likes";

require("trix");
require("@rails/actiontext");

Rails.start();
ActiveStorage.start();