import $ from 'jquery';

$(document).ready(() => {

    const createTicket = () => {
        if ($('.js-comment') !== void 0) {
            const modal = require('./modal');
            const $comment = $('.js-comment');
            const $resolve = $('.js-resolved');

            $comment.click(() => {
                modal.showModal();
            });

            $resolve.click(() => {
                const tid = $('.js-tid').val();
                const mid = $('.js-mid').val();
                $.post('/umbraco/surface/ticketsurface/closeticket', {
                        ticketId: tid,
                        memberId: mid,
                        isResolved: true,
                        reason: null
                    },
                    (response) => {
                        if (response.data !== -1) {
                            location.reload();
                        } else {
                            alert('Error closing ticket');
                        }
                    });
            });
        }
    };

    const ticketFilter = () => {
        const $fltOpen = $('.js-filter-open-tickets');

        const dateSort = function (a, b) {
            var d2 = a.getAttribute('js-date');
            var d1 = b.getAttribute('js-date');
            return d1 - d2;
        };

        const prioritySort = function (a, b) {
            var d2 = a.getAttribute('js-priority');
            var d1 = b.getAttribute('js-priority');
            return d1 - d2;
        };

        const statusSort = function (a, b) {
            var d2 = a.getAttribute('js-status');
            var d1 = b.getAttribute('js-status');
            return d1 - d2;
        };

        const titleSort = function (a, b) {
            var d1 = a.getAttribute('js-title');
            var d2 = b.getAttribute('js-title');
            if (d1 < d2) return -1;
            if (d1 > d2) return 1;
            return 0;
        };

        $fltOpen.on('change', function () {
            const $closed = $('.js-closed');
            const $resolved = $('.js-resolved');
            if ($fltOpen.prop('checked')) {

                $closed.each(function (v, e) {
                    e.classList.add('hidden');
                });
                $resolved.each(function (v, e) {
                    e.classList.add('hidden');
                });
            } else {
                $closed.each(function (v, e) {
                    e.classList.remove('hidden');
                });
                $resolved.each(function (v, e) {
                    e.classList.remove('hidden');
                });
            }

        });

        $('.js-sort-options').on('change', function () {
            const val = $('.js-sort-options').val();
            const items = $('.js-ticket');
            const listDiv = $('.js-ticket-list')[0];

            let sorted = null;
            if (val === 'date') {
                sorted = items.sort(dateSort);
            } else if (val === 'priority') {
                sorted = items.sort(prioritySort);
            } else if (val === 'status') {
                sorted = items.sort(statusSort);
            } else {
                sorted = items.sort(titleSort);
            }

            listDiv.innerHTML = '';
            for (let i = 0; i < sorted.length; i++) {
                listDiv.innerHTML += sorted[i].outerHTML;
            }
        });
    };

    createTicket();
    ticketFilter();
});