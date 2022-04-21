import Rails from "@rails/ujs";
import * as ActiveStorage from "@rails/activestorage";
import "channels";

require("trix");
require("@rails/actiontext");

Rails.start();
ActiveStorage.start();

import "../src/application.css";
import "./flashMessages.js"
import "./modal.js"
import "./likes.js"