export function download_csv_file(sfg) {

    //define the heading for each row of the data
    var csv = 'wavenumber,sfg,ir,vis\n';


    for (let i = 0; i < sfg.wavenumbers.length; i++) {
        csv += [sfg.wavenumbers[i], sfg.sfg_intensity[i], sfg.ir[i], sfg.vis[i]].join(",")
        csv += "\n";
    }

    //display the created CSV data on the web browser
    //document.write(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';

    //provide the name for the CSV file to be downloaded
    hiddenElement.download = `${sfg.name}.csv`;
    hiddenElement.click();
}