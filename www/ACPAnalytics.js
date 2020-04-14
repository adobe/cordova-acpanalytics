/*
 Copyright 2020 Adobe. All rights reserved.
 This file is licensed to you under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License. You may obtain a copy
 of the License at http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software distributed under
 the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 OF ANY KIND, either express or implied. See the License for the specific language
 governing permissions and limitations under the License.
 */

var ACPAnalytics = (function() {
    var exec = require('cordova/exec');
	var ACPAnalytics = (typeof exports !== 'undefined') && exports || {};
	var PLUGIN_NAME = "ACPAnalytics_Cordova";
	// ===========================================================================
	// public APIs
	// ===========================================================================

    // Gets the current Analytics extension version.
    ACPAnalytics.extensionVersion = function (success, error) {
        var FUNCTION_NAME = "extensionVersion";

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (error && !isFunction(error)) {
            printNotAFunction("error", FUNCTION_NAME);
            return;
        }

        exec(success, error, 'ACPAnalytics_Cordova', FUNCTION_NAME, []);
    };

    // Sends all queued hits to Analytics, regardless of the current hit batch settings.
    ACPAnalytics.sendQueuedHits = function (success, error) {
        var FUNCTION_NAME = "sendQueuedHits";

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (error && !isFunction(error)) {
            printNotAFunction("error", FUNCTION_NAME);
            return;
        }

        exec(success, error, 'ACPAnalytics_Cordova', FUNCTION_NAME, []);
    };

    // Force delete, without sending to Analytics, all hits being stored or batched on the SDK.
    ACPAnalytics.clearQueue = function (success, error) {
        var FUNCTION_NAME = "clearQueue";

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (error && !isFunction(error)) {
            printNotAFunction("error", FUNCTION_NAME);
            return;
        }
        exec(success, error, 'ACPAnalytics_Cordova', FUNCTION_NAME, []);
    };

    // Retrieves the total number of Analytics hits in the tracking queue.
    ACPAnalytics.getQueueSize = function (success, error) {
        var FUNCTION_NAME = "getQueueSize";

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (error && !isFunction(error)) {
            printNotAFunction("error", FUNCTION_NAME);
            return;
        }

        exec(success, error, 'ACPAnalytics_Cordova', FUNCTION_NAME, []);
    };

    // Retrieves the Analytics tracking identifier that is generated for this app/device instance.
    ACPAnalytics.getTrackingIdentifier = function (success, error) {
        var FUNCTION_NAME = "getTrackingIdentifier";

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (error && !isFunction(error)) {
            printNotAFunction("error", FUNCTION_NAME);
            return;
        }
        exec(success, error, 'ACPAnalytics_Cordova', FUNCTION_NAME, []);
    };

    // Gets a custom Analytics visitor identifier.
    ACPAnalytics.getVisitorIdentifier = function (success, error) {
        var FUNCTION_NAME = "getVisitorIdentifier";

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (error && !isFunction(error)) {
            printNotAFunction("error", FUNCTION_NAME);
            return;
        }
        exec(success, error, 'ACPAnalytics_Cordova', FUNCTION_NAME, []);
    };

    // Sets a custom Analytics visitor identifier.
    ACPAnalytics.setVisitorIdentifier = function (visitorId, success, error) {
        var FUNCTION_NAME = "setVisitorIdentifier";

        if (!isString(visitorId)) {
            printNotAString("visitorId", FUNCTION_NAME);
            return;
        }

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (error && !isFunction(error)) {
            printNotAFunction("error", FUNCTION_NAME);
            return;
        }

        exec(success, error, 'ACPAnalytics_Cordova', FUNCTION_NAME, [visitorId]);
    };

	return ACPAnalytics;
}());

// ===========================================================================
// helper functions
// ===========================================================================
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

function printNotAString(paramName, functionName) {
    console.log("Ignoring call to '" + functionName + "'. The '" + paramName + "' parameter is required to be a String.");
}

function isFunction (value) {
    return typeof value === 'function';
}

function printNotAFunction(paramName, functionName) {
    console.log("Ignoring call to '" + functionName + "'. The '" + paramName + "' parameter is required to be a function.");
}

module.exports = ACPAnalytics;
