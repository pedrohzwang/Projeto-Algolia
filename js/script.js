var places = require('places.js');

(function () {
    var placesAutocomplete = places({
        appId: 'plXCGCL30CKM',
        apiKey: '8135787edea83caf2010f7bed77955bf',
        container: document.querySelector('#form-address'),
        templates: {
            value: function (suggestion) {
                return suggestion.name;
            }
        }
    }).configure({
        type: 'address'
    });
    placesAutocomplete.on('change', function resultSelected(e) {
        document.querySelector('#form-address2').value = e.suggestion.administrative || '';
        document.querySelector('#form-city').value = e.suggestion.city || '';
        document.querySelector('#form-zip').value = e.suggestion.postcode || '';
    });
})();


/*
appId: 'plXCGCL30CKM',
apiKey: '8135787edea83caf2010f7bed77955bf',
*/