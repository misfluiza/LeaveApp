sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"leaveapp/test/integration/pages/LeaveRequestList",
	"leaveapp/test/integration/pages/LeaveRequestObjectPage",
	"leaveapp/test/integration/pages/LeaveDetailsObjectPage"
], function (JourneyRunner, LeaveRequestList, LeaveRequestObjectPage, LeaveDetailsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('leaveapp') + '/test/flp.html#app-preview',
        pages: {
			onTheLeaveRequestList: LeaveRequestList,
			onTheLeaveRequestObjectPage: LeaveRequestObjectPage,
			onTheLeaveDetailsObjectPage: LeaveDetailsObjectPage
        },
        async: true
    });

    return runner;
});

