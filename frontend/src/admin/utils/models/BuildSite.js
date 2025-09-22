function BuildSite(
	id,
	name,
	address,
	city,
	state,
	zip,
	country,
	phone,
	email,
	website,
	notes,
	createdAt,
	updatedAt
) {
	this.id = id;
	this.name = name;
	this.address = address;
	this.city = city;
	this.state = state;
	this.zip = zip;
	this.country = country;
	this.phone = phone;
	this.email = email;
	this.website = website;
	this.notes = notes;
	this.createdAt = createdAt;
	this.updatedAt = updatedAt;
}

export default BuildSite;
