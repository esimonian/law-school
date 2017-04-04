 var chart_config = {
        chart: {
            container: "#collapsable-example",

            animateOnInit: true,
            
            node: {
                collapsable: true
            },
            connectors: {
                type: "straight",
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }
        },
        nodeStructure: {
            innerHTML: "<p>Does the suit arise out of a <strong>question of Federal Law</strong></p>",
            collapsed: true,
            children: [
                {
                    innerHTML: "<p>Is there a <strong>Well-Pleaded Complaint?</strong></p>\
                    <ul> \
                    <li>Federal Issue MUST be part of the CLAIM <br>rather than a potential defense</li> \
                    <li>Interpretation of §1331</li></ul>",
                    HTMLclass: 'green',
                    collapsed: true,
                    children: [
                        {
                             innerHTML: "<h3><strong>Valid Federal Question SMG</strong></h3>\
                             <div class='red-text center'>§1331</div> \
                             <p>(<strong>NO</strong> Amount in controversy requirement)</p>",
                                HTMLclass: 'green'
                        },
                        {
                             innerHTML: "<h3><strong>NO SMJ</strong></h3>\
                                <p>(Federal Court Must Dismiss)</p>",
                                HTMLclass: 'red'
                        }
                    ]
                },
                {
                    innerHTML: "<p>Does at least one side \
                    <strong>consist completely of foreign</strong><br>\
                    countries or citizens from a foreign country? <br> \
                    (if parties both contain at least 1 US citizen<br> \
                    move to diversity analysis)</p>",
                    HTMLclass: 'red',
                    collapsed: true,
                    children: [
                        {
                             innerHTML: "<p>Is a <strong>corporation</strong> a party?</p>",
                                HTMLclass: 'red'
                        },
                        {
                             innerHTML: "<p><em>Alienage Jurisdiction -</em></p>\
                             <p>Is the suit btw of a citizen of a US State, <br>\
                             on one side, and foreign countries, or <br>\
                             citizens of foreign countries <br>\
                             on the other?</p>\
                             <div class='red-text center'>§1332(a)(2)</div>",
                                HTMLclass: 'green'
                        }
                    ]
                }
            ]
        }
    };