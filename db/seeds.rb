orgs = [
  { name: '大聯盟' },
  { name: '小聯盟' },
  { name: '種花電信' },
  { name: 'A錢中油' },
  { name: '台Ｇ電' }
]

orgs.each do |org|
  Org.find_or_create_by(name: org[:name])
end

Manufacturer.destroy_all

(1..30).each do |i|
  Manufacturer.create(name: Faker::Job.title,
                      tel: Faker::PhoneNumber.phone_number,
                      email: Faker::Internet.email,
                      principal: Faker::Name.name,
                      code: Faker::Code.npi)
end