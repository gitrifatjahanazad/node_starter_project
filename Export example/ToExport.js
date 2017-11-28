var ToExport = {
    TobeExportedFunction : function (){
        console.log("To Export function was called");
    },
    TobeExportedProperty:"To Export property was called"
};

exports.ToExport = ToExport;