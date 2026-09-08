function normalizeUnits(manifest) {
  const noramalizedManifest = { ...manifest };
  if (noramalizedManifest.unit === "lb") {
    noramalizedManifest.unit = "kg";
    noramalizedManifest.weight = noramalizedManifest.weight * 0.45;
  }

  return noramalizedManifest;
}

function validateManifest(manifest) {
  const errors = {};

  // containerId: must be a positive integer
  if (manifest.containerId === undefined) {
    errors.containerId = "Missing";
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  // destination: must be a non-empty string
  if (manifest.destination === undefined) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  // weight: must be a finite, non-negative number
  if (manifest.weight === undefined) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    !Number.isFinite(manifest.weight) || // catches NaN, Infinity, -Infinity
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  // unit: must be exactly "kg"
  if (manifest.unit === undefined) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  // hazmat: must be a boolean
  if (manifest.hazmat === undefined) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const errors = validateManifest(manifest);
  if (Object.keys(errors).length === 0) {
    const normalized = normalizeUnits(manifest);

    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} ${normalized.unit}`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}