export function validateName(name: string | undefined): string {
  if (!name) return "Please enter your startup name";
  if (name.length < 3) return "Name must be at least 3 characters";
  return "";
}

export function validateWebsite(website: string | undefined): string {
  if (!website) return "Please enter your website";
  if (!/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(website)) return "Please enter a valid website starting with http/https and including a domain name.";
  return "";
}

export function validateLocation(location: string | undefined): string {
  if (!location) return "Please enter your location";
  return "";
}

export function validateTechnology(technology: string[] | undefined): string {
  if (!technology || technology.length === 0) {
    return 'Please select at least one technology';
  }
  return '';
}

export function validateIndustry(industry: string | undefined): string {
  if (!industry) return "Please enter your industry";
  return "";
}

export function validateFounded(founded: string | undefined): string {
  if (!founded) {
    return 'Please enter the date your company was founded';
  }
  return '';
};