/*
 *  Copyright 2012 Choorp Studios
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

enyo.kind({
	name: "Choorp.AIOS",
	kind: enyo.VFlexBox,
	components: [
		{name: "slidingPane", kind: "SlidingPane", flex: 1, onSlideComplete: "resizeApp", components: [
			{kind:"SlidingView", width: "220px", components: [
				{kind: "FadeScroller", flex:1, style: "background: #ccc;", components: [
					{kind: "VFlexBox", components: [
						{kind: "Item", tapHighlight: true, layoutKind: "HFlexLayout", className: "listItem", onclick: "openAccounts", components: [
							{kind: "Image", src: "images/accounts.png", className: "listIcon"},
							{content: "Accounts", className: "listItemText"}
						]},
						{kind: "Item", tapHighlight: true, layoutKind: "HFlexLayout", className: "listItem", onclick: "openBackup", components: [
							{kind: "Image", src: "images/backup.png", className: "listIcon"},
							{content: "Backup", className: "listItemText"}
						]},
						{kind: "Item", tapHighlight: true, layoutKind: "HFlexLayout", className: "listItem", onclick: "openBluetooth", components: [
							{kind: "Image", src: "images/bluetooth.png", className: "listIcon"},
							{content: "Bluetooth", className: "listItemText"}
						]},
						{kind: "Item", tapHighlight: true, layoutKind: "HFlexLayout", className: "listItem", onclick: "openDateTime", components: [
							{kind: "Image", src: "images/datetime.png", className: "listIcon"},
							{content: "Date & Time", className: "listItemText"}
						]},
						{kind: "Item", tapHighlight: true, layoutKind: "HFlexLayout", className: "listItem", onclick: "openDeviceInfo", components: [
							{kind: "Image", src: "images/deviceinfo.png", className: "listIcon"},
							{content: "Device Info", className: "listItemText"}
						]},
						{kind: "Item", tapHighlight: true, layoutKind: "HFlexLayout", className: "listItem", onclick: "openExhibition", components: [
							{kind: "Image", src: "images/exhibition.png", className: "listIcon"},
							{content: "Exhibition", className: "listItemText"}
						]},
						{kind: "Item", tapHighlight: true, layoutKind: "HFlexLayout", className: "listItem", onclick: "openJustType", components: [
							{kind: "Image", src: "images/justtype.png", className: "listIcon"},
							{content: "Just Type", className: "listItemText"}
						]},
						{kind: "Item", tapHighlight: true, layoutKind: "HFlexLayout", className: "listItem", onclick: "openLocation", components: [
							{kind: "Image", src: "images/location.png", className: "listIcon"},
							{content: "Location", className: "listItemText"}
						]},
						{kind: "Item", tapHighlight: true, layoutKind: "HFlexLayout", className: "listItem", onclick: "openPrintManager", components: [
							{kind: "Image", src: "images/printer.png", className: "listIcon"},
							{content: "Print Manager", className: "listItemText"}
						]},
						{kind: "Item", tapHighlight: true, layoutKind: "HFlexLayout", className: "listItem", onclick: "openRegional", components: [
							{kind: "Image", src: "images/region.png", className: "listIcon"},
							{content: "Regional", className: "listItemText"}
						]},
						{kind: "Item", tapHighlight: true, layoutKind: "HFlexLayout", className: "listItem", onclick: "openScreenLock", components: [
							{kind: "Image", src: "images/screenlock.png", className: "listIcon"},
							{content: "Screen & Lock", className: "listItemText"}
						]},
						{kind: "Item", tapHighlight: true, layoutKind: "HFlexLayout", className: "listItem", onclick: "openSounds", components: [
							{kind: "Image", src: "images/sounds.png", className: "listIcon"},
							{content: "Sounds", className: "listItemText"}
						]},
						{kind: "Item", tapHighlight: true, layoutKind: "HFlexLayout", className: "listItem", onclick: "openSoftwareManager", components: [
							{kind: "Image", src: "images/swmanager.png", className: "listIcon"},
							{content: "Software Manager", className: "listItemText"}
						]},
						{kind: "Item", tapHighlight: true, layoutKind: "HFlexLayout", className: "listItem", onclick: "openSystemUpdates", components: [
							{kind: "Image", src: "images/updates.png", className: "listIcon"},
							{content: "System Updates", className: "listItemText"}
						]},
						{kind: "Item", tapHighlight: true, layoutKind: "HFlexLayout", className: "listItem", onclick: "openTextAssist", components: [
							{kind: "Image", src: "images/textassist.png", className: "listIcon"},
							{content: "Text Assist", className: "listItemText"}
						]},
						{kind: "Item", tapHighlight: true, layoutKind: "HFlexLayout", className: "listItem", onclick: "openVPN", components: [
							{kind: "Image", src: "images/vpn.png", className: "listIcon"},
							{content: "VPN", className: "listItemText"}
						]},
						{kind: "Item", tapHighlight: true, layoutKind: "HFlexLayout", className: "listItem", onclick: "openWifi", components: [
							{kind: "Image", src: "images/wifi.png", className: "listIcon"},
							{content: "Wi-Fi", className: "listItemText"}
						]}
					]}
				]},
				{kind: "Toolbar"}
			]},
			{kind:"SlidingView", flex:1, peekWidth: 70,components: [
				{name: "appContainer", kind: "VFlexBox", flex:1, components: [
					{kind: "CrossAppUI", name: "crossApp", app: "com.palm.app.accounts", path: "index.html", showing:true, style:"padding-bottom:52px;"}
				]},
				{kind: "Toolbar", components: [
					{kind: "GrabButton"}
				]}
			]}
		]},
		{kind: "AppMenu", components: [
			{caption: "About", onclick: "openAbout"}
		]},
		{name: "aboutPopup", kind: "ModalDialog", caption: "About", contentClassName: "aboutPopupText", components: [
			{content: "This app simply combines all the settings apps to deliver a more effiecient setup. Some apps still launch into new cards. I'll try to fix that if I find a way."},
			{style: "height: 20px;"},
			{content: "Have questions or suggestions for this app? You can contact me on Twitter (@ChoorpStudios) or by email (Choorp@gmail.com)"},
			{kind: "Button", caption: "Close", onclick: "closeAbout"}
		]}
	],
	resizeApp: function() {
		if(this.$.appContainer.hasNode()) {
			var appWidth = this.$.appContainer.hasNode().clientWidth + "px";
			this.$.crossApp.applyStyle("width", appWidth);
		}
	},
	openAccounts: function() {
		this.$.crossApp.setApp("com.palm.app.accounts");
	},
	openBackup: function() {
		this.$.crossApp.setApp("com.palm.app.backup");
	},
	openBluetooth: function() {
		this.$.crossApp.setApp("com.palm.app.bluetooth");
	},
	openDateTime: function() {
		this.$.crossApp.setApp("com.palm.app.dateandtime");
	},
	openDeviceInfo: function() {
		this.$.crossApp.setApp("com.palm.app.deviceinfo");
	},
	openExhibition: function() {
		this.$.crossApp.setApp("com.palm.app.exhibitionpreferences");
	},
	openJustType: function() {
		this.$.crossApp.setApp("com.palm.app.searchpreferences");
	},
	openLocation: function() {
		this.$.crossApp.setApp("com.palm.app.location");
	},
	openPrintManager: function() {
		this.$.crossApp.setApp("com.palm.app.printmanager");
	},
	openRegional: function() {
		this.$.crossApp.setApp("com.palm.app.languagepicker");
	},
	openScreenLock: function() {
		this.$.crossApp.setApp("com.palm.app.screenlock");
	},
	openSounds: function() {
		this.$.crossApp.setApp("com.palm.app.soundsandalerts");
	},
	openSoftwareManager: function() {
		this.$.crossApp.setApp("com.palm.app.swmanager");
	},
	openSystemUpdates: function() {
		this.$.crossApp.setApp("com.palm.app.updates");
	},
	openTextAssist: function() {
		this.$.crossApp.setApp("com.palm.app.textassist");
	},
	openVPN: function() {
		this.$.crossApp.setApp("com.palm.app.vpn");
	},
	openWifi: function() {
		this.$.crossApp.setApp("com.palm.app.wifi");
	},
	openAbout: function() {
		this.$.aboutPopup.openAtCenter();
	},
	closeAbout: function() {
		this.$.aboutPopup.close();
	}
});