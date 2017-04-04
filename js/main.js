 var chart_config = {
        chart: {
            container: "#collapsable-example",

            animateOnInit: true,
            
            node: {
                collapsable: true
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }
        },
        nodeStructure: {
            text: {
                name: "Does the suit arise out of a question of Federal Law",
            },
            children: [
                {
                    innerHTML: "<p>Is there a <strong>Well-Pleaded Complaint?</strong></p>\
                    <ul> \
                    <li>Federal Issue MUST be part of the CLAIM rather than a potential defense</li> \
                    <li>Interpretation of §1331</li></ul>",
                    HTMLclass: 'green',
                    collapsed: true,
                    children: [
                        {
                            image: "img/figgs.png"
                        }
                    ]
                },
                {
                    text: {
                        name: "Does the suit arise out of a question of Federal Law",
                    },
                    HTMLclass: 'red',
                    childrenDropLevel: 1,
                    children: [
                        {
                            image: "img/woodhouse.png"
                        }
                    ]
                }
            ]
        }
    };