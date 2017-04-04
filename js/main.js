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
                    childrenDropLevel: 1,
                    collapsed: true,
                    children: [
                        {
                            innerHTML: "<p>Is a <strong>corporation</strong> a party?</p>",
                            HTMLclass: 'red',
                            collapsed: true,
                            children: [
                                {
                                     innerHTML: "<p>For Diversity Purposes, a corp a citizen of</p>\
                                     <ol> \
                                     <li><strong>All states of Incorporation</strong></li>\
                                     <li><strong>Single Principle Place of Business</strong> <br>\
                                     (Nerve Center v. Muscle Center)</li>\
                                     <div class='red-text center'>§13312(c)</div> ",
                                        HTMLclass: 'green'
                                },
                                {
                                     innerHTML: "<p>Is an <strong>Unicorporated Entity</strong> <br>\
                                     a party?</p>",
                                    HTMLclass: 'red'
                                }
                            ]
                        },
                        {
                            innerHTML: "<p><em>Alienage Jurisdiction -</em></p>\
                             <p>Is the suit btw of a citizen of a US State, <br>\
                             on one side, and foreign countries, or <br>\
                             citizens of foreign countries <br>\
                             on the other?</p>\
                             <div class='red-text center'>§1332(a)(2)</div>",
                            HTMLclass: 'green',
                            collapsed: true,
                            childrenDropLevel: 1,
                            children: [
                                {
                                     innerHTML: "<h3><strong>Valid Federal Question SMG</strong></h3>\
                                     <div class='red-text center'>§1331</div> \
                                     <p>(<strong>NO</strong> Amount in <br>controversy requirement)</p>",
                                        HTMLclass: 'green'
                                },
                                {
                                     innerHTML: "<h3><strong>NO SMJ</strong></h3>\
                                        <p>(Federal Court Must Dismiss)</p>",
                                        HTMLclass: 'red'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    };
/*
    Directive by HTML5 UP
    html5up.net | @ajlkn
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    skel.breakpoints({
        wide: '(max-width: 1680px)',
        normal: '(max-width: 1280px)',
        narrow: '(max-width: 980px)',
        narrower: '(max-width: 840px)',
        mobile: '(max-width: 736px)',
        mobilep: '(max-width: 480px)'
    });

    $(function() {

        var $window = $(window),
            $body = $('body');

        // Disable animations/transitions until the page has loaded.
            $body.addClass('is-loading');

            $window.on('load', function() {
                $body.removeClass('is-loading');
            });

        // Fix: Placeholder polyfill.
            $('form').placeholder();

        // Prioritize "important" elements on narrower.
            skel.on('+narrower -narrower', function() {
                $.prioritize(
                    '.important\\28 narrower\\29',
                    skel.breakpoint('narrower').active
                );
            });

    });

})(jQuery);