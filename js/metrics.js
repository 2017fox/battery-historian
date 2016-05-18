/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Defines for the various metrics.
 */
goog.provide('historian.metrics');
goog.provide('historian.metrics.Csv');

goog.require('historian.constants');


/** CPU Running entry that intersects with a wakelock entry. */
historian.metrics.KERNEL_UPTIME_WITH_USERSPACE = 2;


/** CPU Running entry that doesn't intersect with any wakelock entry. */
historian.metrics.KERNEL_UPTIME_NO_USERSPACE = 1;


/**
 * This metric is generated by analysing the CPU_RUNNING metric and
 * the userspace wakelock metric (WAKELOCK_IN or WAKE_LOCK_HELD).
 */
historian.metrics.KERNEL_UPTIME = 'Kernel only uptime';


/**
 * Signifies a metric is of error type.
 * @const {string}
 */
historian.metrics.ERROR_TYPE = 'error';


/**
 * Signifies when the metric is not available.
 * @const {string}
 */
historian.metrics.UNAVAILABLE_TYPE = 'unavailable';


/**
 * The string representing the metric in the historian V2 CSV input.
 *
 * @enum {string}
 */
historian.metrics.Csv = {
  // Int metrics
  TEMPERATURE: 'Temperature',
  VOLTAGE: 'Voltage',
  BATTERY_LEVEL: 'Level',
  BRIGHTNESS: 'Brightness',
  COULOMB_CHARGE: 'Coulomb charge',
  SIGNAL_STRENGTH: 'Mobile signal strength',

  // String metrics
  PHONE_STATE: 'Phone state',
  DATA_CONNECTION: 'Mobile network type',
  PLUG_TYPE: 'Plug',
  CHARGING_STATUS: 'Charging status',
  HEALTH: 'Health',
  WIFI_SUPPLICANT: 'Wifi supplicant',
  WIFI_SIGNAL_STRENGTH: 'Wifi signal strength',
  IDLE_MODE_ON: 'Doze',

  // Bool metrics
  CPU_RUNNING: 'CPU running',
  SENSOR_ON: 'Sensor',
  GPS_ON: 'GPS',
  WIFI_FULL_LOCK: 'Wifi full lock',
  WIFI_SCAN: 'Wifi scan',
  WIFI_MULTICAST_ON: 'Wifi multicast',
  MOBILE_RADIO_ON: 'Mobile radio active',
  WIFI_ON: 'Wifi on',
  WIFI_RADIO: 'Wifi radio',
  WIFI_RUNNING: 'Wifi running',
  PHONE_SCANNING: 'Phone scanning',
  BLE_SCANNING: 'BLE scanning',
  SCREEN_ON: 'Screen',
  PLUGGED: 'Plugged',
  PHONE_IN_CALL: 'Phone call',
  LOW_POWER_MODE: 'Battery Saver',
  AUDIO: 'Audio',
  CAMERA: 'Camera',
  VIDEO: 'Video',
  REBOOT: 'Reboot',
  FLASHLIGHT: 'Flashlight on',
  CHARGING_ON: 'Charging on',
  DEVICE_ACTIVE: 'Device active',
  SIGNIFICANT_MOTION: 'Significant motion',

  // Service metrics
  WAKELOCK_IN: 'Wakelock_in',
  WAKE_LOCK_HELD: 'Partial wakelock',
  SYNC_APP: 'SyncManager',
  ACTIVE_PROCESS: 'Active process',
  FOREGROUND_PROCESS: 'Foreground process',
  TOP_APPLICATION: 'Top app',
  CONNECTIVITY: 'Network connectivity',
  SCHEDULED_JOB: 'JobScheduler',
  PACKAGE_INSTALL: 'Package install',
  PACKAGE_UNINSTALL: 'Package uninstall',
  PACKAGE_ACTIVE: 'Package active',
  PACKAGE_INACTIVE: 'Package inactive',
  TMP_WHITE_LIST: 'Temp White List',

  KERNEL_WAKESOURCE: 'Kernel Wakesource',
  POWERMONITOR: 'Powermonitor',

  // Logcat metrics
  CRASHES: 'Crashes',
  BLUETOOTH_SCAN: 'Bluetooth Scan',

  // Event log metrics.
  AM_PROC_START: 'AM Proc Start',
  AM_PROC_DIED: 'AM Proc Died',
  // Group name for AM_PROC_START and AM_PROC_DIED.
  AM_PROC: 'Activity Manager Proc',
  AM_LOW_MEMORY: 'AM Low Memory',
  AM_ANR: 'ANR',
  // Group name for AM_LOW_MEMORY and AM_ANR.
  AM_LOW_MEMORY_ANR: 'AM Low Memory / ANR'
};


/**
 * Defines the order the metrics are drawn in Historian v2.
 * @const {!Array<string>}
 */
historian.metrics.ORDER = [
  historian.metrics.Csv.REBOOT,
  historian.metrics.Csv.CPU_RUNNING,
  historian.metrics.KERNEL_UPTIME,
  historian.metrics.Csv.WAKELOCK_IN,
  historian.metrics.Csv.WAKE_LOCK_HELD,
  historian.metrics.Csv.KERNEL_WAKESOURCE,
  historian.metrics.Csv.SCREEN_ON,
  historian.metrics.Csv.TOP_APPLICATION,
  historian.metrics.Csv.AM_PROC,
  historian.metrics.Csv.AM_LOW_MEMORY_ANR,
  historian.metrics.Csv.CRASHES,
  historian.metrics.Csv.BRIGHTNESS,

  // Battery saver and Doze
  historian.metrics.Csv.LOW_POWER_MODE,
  historian.metrics.Csv.IDLE_MODE_ON,
  historian.metrics.Csv.DEVICE_ACTIVE,
  historian.metrics.Csv.SIGNIFICANT_MOTION,

  historian.metrics.Csv.SCHEDULED_JOB,
  historian.metrics.Csv.SYNC_APP,
  historian.metrics.Csv.TMP_WHITE_LIST,

  historian.metrics.Csv.PHONE_IN_CALL,
  historian.metrics.Csv.GPS_ON,
  historian.metrics.Csv.SENSOR_ON,
  historian.metrics.Csv.BLUETOOTH_SCAN,

  // Cellular related
  historian.metrics.Csv.BLE_SCANNING,
  historian.metrics.Csv.PHONE_SCANNING,
  historian.metrics.Csv.PHONE_STATE,
  historian.metrics.Csv.CONNECTIVITY,
  historian.metrics.Csv.DATA_CONNECTION,
  historian.metrics.Csv.MOBILE_RADIO_ON,
  historian.metrics.Csv.SIGNAL_STRENGTH,

  // WiFi related
  historian.metrics.Csv.WIFI_FULL_LOCK,
  historian.metrics.Csv.WIFI_SCAN,
  historian.metrics.Csv.WIFI_SUPPLICANT,
  historian.metrics.Csv.WIFI_RADIO,
  historian.metrics.Csv.WIFI_SIGNAL_STRENGTH,
  historian.metrics.Csv.WIFI_MULTICAST_ON,
  historian.metrics.Csv.WIFI_RUNNING,
  historian.metrics.Csv.WIFI_ON,

  historian.metrics.Csv.AUDIO,
  historian.metrics.Csv.FLASHLIGHT,
  historian.metrics.Csv.CAMERA,
  historian.metrics.Csv.VIDEO,

  historian.metrics.Csv.FOREGROUND_PROCESS,

  historian.metrics.Csv.PACKAGE_INSTALL,
  historian.metrics.Csv.PACKAGE_UNINSTALL,
  historian.metrics.Csv.PACKAGE_ACTIVE,
  historian.metrics.Csv.PACKAGE_INACTIVE
];


/**
 * Returns the key of a series CSV metric.
 * @param {string} name Name of a metric.
 * @return {string|undefined}
 */
historian.metrics.getSeriesKey = function(name) {
  for (var key in historian.metrics.Csv) {
    if (name == historian.metrics.Csv[key])
      return key;
  }
  return undefined;
};


/**
 * The string representing the metric in the level summary CSV input.
 *
 * @enum {string}
 */
historian.metrics.levelSummaryCsv = {
  PLUGGED: 'PluggedIn',
  SCREEN_ON: 'ScreenOn',
  MOBILE_RADIO_ON: 'MobileRadioOn',
  WIFI_ON: 'WifiOn',
  CPU_RUNNING: 'CPURunning',

  GPS_ON: 'GpsOn',
  SENSOR_ON: 'SensorOn',
  WIFI_SCAN: 'WifiScan',
  WIFI_FULL_LOCK: 'WifiFullLock',
  WIFI_RADIO: 'WifiRadio',
  WIFI_RUNNING: 'WifiRunning',
  WIFI_MULTICAST_ON: 'WifiMulticastOn',

  AUDIO: 'AudioOn',
  CAMERA: 'CameraOn',
  VIDEO: 'VideoOn',
  LOW_POWER_MODE: 'LowPowerModeOn',
  FLASHLIGHT: 'FlashlightOn',
  CHARGING_ON: 'ChargingOn',

  PHONE_IN_CALL: 'PhoneCall',
  PHONE_SCANNING: 'PhoneScan',
  BLE_SCANNING: 'BLEScan'
};


/**
 * Returns the key of a level summary CSV dimension, which corresponds
 * to the historian V2 CSV metric.
 * @param {string} name Name of a metric.
 * @return {string|undefined}
 */
historian.metrics.getLevelSummaryDimensionKey = function(name) {
  for (var key in historian.metrics.levelSummaryCsv) {
    if (name == historian.metrics.levelSummaryCsv[key])
      return key;
  }
  return undefined;
};


/**
 * Map for testing whether metric will be hidden by default as a bar metric.
 * True for the metric if metric is to be hidden.
 * @type {!Object<boolean>}
 */
historian.metrics.hiddenBarMetrics = {};


/**
 * Metrics that will be hidden by default as a bar metric.
 * @private @const {!Array<string>}
 */
historian.metrics.HIDDEN_BAR_METRICS_ = [
  historian.metrics.Csv.HEALTH,
  historian.metrics.Csv.PLUG_TYPE,
  historian.metrics.Csv.CHARGING_STATUS,
  historian.metrics.Csv.VOLTAGE,
  historian.metrics.Csv.BRIGHTNESS,
  historian.metrics.Csv.POWERMONITOR
];


/**
 * Map for testing whether metric will be aggregated.
 * True for metrics to be aggregated.
 * @type {!Object<boolean>}
 */
historian.metrics.metricsToAggregate = {};


/**
 * Metrics which will be aggregated.
 * @private @const {!Array<string>}
 */
historian.metrics.METRICS_TO_AGGREGATE_ = [
  historian.metrics.Csv.SYNC_APP,
  historian.metrics.Csv.FOREGROUND_PROCESS,
  historian.metrics.Csv.WAKELOCK_IN,
  historian.metrics.Csv.CONNECTIVITY,
  historian.metrics.Csv.KERNEL_WAKESOURCE
];


/**
 * Map for testing whether a metric can be filtered by UID.
 * True for metrics to be filtered.
 * @type {!Object<boolean>}
 */
historian.metrics.appSpecificMetrics = {};


/**
 * Metrics which will be filtered by UID.
 * @private @const {!Array<string>}
 */
historian.metrics.APP_SPECIFIC_METRICS_ = [
  historian.metrics.Csv.SYNC_APP,
  historian.metrics.Csv.FOREGROUND_PROCESS,
  historian.metrics.Csv.WAKELOCK_IN,
  historian.metrics.Csv.TOP_APPLICATION,
  historian.metrics.Csv.SCHEDULED_JOB,
  historian.metrics.Csv.TMP_WHITE_LIST,
  historian.metrics.Csv.PACKAGE_INSTALL,
  historian.metrics.Csv.PACKAGE_UNINSTALL,
  historian.metrics.Csv.PACKAGE_ACTIVE,
  historian.metrics.Csv.PACKAGE_INACTIVE,
  historian.metrics.Csv.AM_PROC_START,
  historian.metrics.Csv.AM_PROC_DIED,
  historian.metrics.Csv.AM_ANR,
  historian.metrics.Csv.CRASHES,
  historian.metrics.Csv.BLUETOOTH_SCAN
];


/**
 * Map for testing whether a metric is unreliable.
 * These metrics will be specially marked.
 * @type {!Object<boolean>}
 */
historian.metrics.unreliableMetrics = {};


/**
 * Metrics which are unreliable.
 * @private @const {!Array<string>}
 */
historian.metrics.UNRELIABLE_METRICS_ = [
  historian.metrics.Csv.AUDIO
];


/**
 * Map for from metric name to bool, for testing whether a metric should be
 * rendered as a circle.
 * @type {!Object<boolean>}
 */
historian.metrics.renderAsCircles = {};


/**
 * Metrics that will be rendered as circles.
 * By default metrics are rendered as rectangles.
 * @private @const {!Array<string>}
 */
historian.metrics.RENDER_AS_CIRCLES_ = [
  historian.metrics.Csv.AM_PROC_START,
  historian.metrics.Csv.AM_PROC_DIED,
  historian.metrics.Csv.AM_LOW_MEMORY,
  historian.metrics.Csv.AM_ANR,
  historian.metrics.Csv.CRASHES,
  historian.metrics.Csv.BLUETOOTH_SCAN
];


/**
 * Map from metric name to bool, for testing whether a metric is from logcat.
 * @type {!Object<boolean>}
 */
historian.metrics.logcatMetrics = {};


/**
 * Metrics that have been extracted from logcat.
 * @private @const {!Array<string>}
 */
historian.metrics.LOGCAT_METRICS_ = [
  historian.metrics.Csv.CRASHES,
  historian.metrics.Csv.BLUETOOTH_SCAN
];


/**
 * Map from group name to descriptor to display in help tooltips.
 * @type {!Object<string>}
 */
historian.metrics.descriptors = {};


/**
 * Sets up the maps for testing properties for the metrics.
 */
historian.metrics.initMetrics = function() {
  historian.metrics.HIDDEN_BAR_METRICS_.forEach(function(m) {
    historian.metrics.hiddenBarMetrics[m] = true;
  });
  historian.metrics.METRICS_TO_AGGREGATE_.forEach(function(m) {
    historian.metrics.metricsToAggregate[m] = true;
  });
  historian.metrics.APP_SPECIFIC_METRICS_.forEach(function(m) {
    historian.metrics.appSpecificMetrics[m] = true;
  });
  historian.metrics.UNRELIABLE_METRICS_.forEach(function(m) {
    historian.metrics.unreliableMetrics[m] = true;
  });
  historian.metrics.RENDER_AS_CIRCLES_.forEach(function(m) {
    historian.metrics.renderAsCircles[m] = true;
  });
  historian.metrics.LOGCAT_METRICS_.forEach(function(m) {
    historian.metrics.logcatMetrics[m] = true;
  });
  // Descriptors populated here will be shown in the corresponding help icon.
  historian.metrics.descriptors[historian.metrics.Csv.WAKE_LOCK_HELD] =
      'Userspace wakelocks prevent the CPU from sleeping. This may point ' +
      'out problems with applications or services holding wakelocks too ' +
      'frequently, or may be a result of errors encountered performing ' +
      'operations normally expected to complete quickly, such as network ' +
      'sync operations. Some wakelocks are intentionally held for ' +
      'relatively long times to prevent the system from sleeping during ' +
      'activities such as screen off audio playback.\n\n' +
      'Only the first app to acquire the wakelock is shown. Please see the ' +
      'system stats Userspace Wakelocks table for absolute numbers.\n\n' +
      'You can also enable full wakelock reporting:\n' +
      'adb shell dumpsys batterystats --enable full-wake-history';
};


/**
 * Returns whether the metric is aggregated.
 * @param {string} name The metric name.
 * @return {boolean} True if the metric is aggregated, false otherwise.
 */
historian.metrics.isAggregatedMetric = function(name) {
  return (name in historian.metrics.metricsToAggregate);
};


/**
 * Returns the metric name appended with the error identifier.
 * @param {string} name The original metric name.
 * @return {string}
 */
historian.metrics.errorMetric = function(name) {
  return name + ' [Error]';
};


/**
 * Gets the base metric name without the error identifier.
 * @param {string} name The name for the error metric.
 * @return {string} The original metric name.
 */
historian.metrics.baseMetric = function(name) {
  var lastIndex = name.lastIndexOf(' ');
  return ((lastIndex == historian.constants.NOT_FOUND) ? name :
      name.substring(0, lastIndex));
};