sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project2/test/integration/FirstJourney',
		'project2/test/integration/pages/ZR_FMBList',
		'project2/test/integration/pages/ZR_FMBObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZR_FMBList, ZR_FMBObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project2') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZR_FMBList: ZR_FMBList,
					onTheZR_FMBObjectPage: ZR_FMBObjectPage
                }
            },
            opaJourney.run
        );
    }
);