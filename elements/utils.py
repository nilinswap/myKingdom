
import elements.models as m
def update():
	all_cards = m.Element.objects.all()
	set_of_categories = set([q.category for q in all_cards])
	card_sort_map = {i:[] for i in set_of_categories}#[[q.id, q.name, q.message, q.category] for q in p]
	for card in all_cards:
		card_sort_map[card.category].append([card.id, card.name, card.message, card.category])
	st = ''
	with open("/Users/swapnil/forgit/myKingdom/frontend/src/components/leads/Leads.js", "r+") as file:
		st_lis = file.readlines()
		if st_lis[0].startswith("const card_sort_map"):
			st_lis = st_lis[1:]
		st = ''.join(st_lis)
		
		
	with open("/Users/swapnil/forgit/myKingdom/frontend/src/components/leads/Leads.js","w+") as file:
		st = "const card_sort_map = " + str(card_sort_map) + "\n" + st
		file.write(st)
	
	#st = "var "