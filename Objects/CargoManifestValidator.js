function normalizeUnits(manifest) {
  if(manifest.hasOwnProperty('lb')) {
    delete manifest.lb
  }
}
function validateManifest(manifest) {}
function processManifest(manifest) {
  if (something) {
    console.log(`Validation success: ${containerId} Total weight: ${weight}`);
  } else {
    console.log(`Validation error: ${containerId}`);
  }
}
