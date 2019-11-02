require 'open-uri'
require 'yaml'
require 'nokogiri'

doc = Nokogiri::HTML( open ('https://fr.wikipedia.org/wiki/Liste_des_victimes_de_chasses_aux_sorci%C3%A8res' ) )

years = []

doc.xpath( '//tr' ).each do |e|
	r = e.xpath( './/td' )[1]

	if r
		d = r.children[0]

		if d.text?
			years << d.text.strip.to_i
		else
			begin
				years << DateTime.parse( d.attr('datetime') ).year
			rescue => e
			end
		end
	end
	# puts
end

hash_data = {}
years.sort.select{ |e| e > 1200 }.each do |year|
	hash_data[ year ] ||= 0
	hash_data[ year ] += 1
end

pp hash_data

result = { years: [], cumul: [] }
cumul = 0

1250.upto( 2019 ).each do |year|
	cumul += hash_data[ year ] || 0
	result[:years] << year
	result[:cumul] << cumul
end

result[:series] = [ { name: 'Nombre de condammnations' }, data: result[:cumul] ]

File.open( '../data/results.yaml', 'w' ) { |file| file.write( result.to_yaml ) }


