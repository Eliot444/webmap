var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EPCI_1 = new ol.format.GeoJSON();
var features_EPCI_1 = format_EPCI_1.readFeatures(json_EPCI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPCI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCI_1.addFeatures(features_EPCI_1);
var lyr_EPCI_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPCI_1, 
                style: style_EPCI_1,
                interactive: true,
                title: '<img src="styles/legend/EPCI_1.png" /> EPCI'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_EPCI_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EPCI_1];
lyr_EPCI_1.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_EPCI_1.set('fieldImages', {'ID': '', 'CODE_SIREN': '', 'NATURE': '', 'NOM': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'ID_AUT_ADM': '', });
lyr_EPCI_1.set('fieldLabels', {'ID': 'no label', 'CODE_SIREN': 'no label', 'NATURE': 'no label', 'NOM': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'ID_AUT_ADM': 'no label', });
lyr_EPCI_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});