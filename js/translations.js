angular.module('registries')
.config(['$translateProvider', function($translateProvider) {
	$translateProvider.preferredLanguage('sk');
	$translateProvider.translations('sk', {
		"menu.member.title": "Člen",
		"menu.player.title": "Hráč",
		"menu.fees.title": "Poplatok",
		"menu.referee.title": "Rozhodca",
		"menu.coach.title": "Tréner",
		"menu.event.title":"Údalosť",
		"menu.stadium.title": "Štadión",
		"menu.club.title": "Klub",
		"menu.association.title": "Zväz",
		"menu.person.title": "Osoba",
		"menu.transfer.title": "Zmena kl. príslušnosti",
		"menu.season.title": "Súťažný ročník",
		"menu.age.category.title": "Veková kategória",
		"menu.roster.title": "Súpisky",
		"menu.competition.title": "Súťaž",
		"menu.company.title": "Organizácia",
		"menu.my.profile.title": "Môj profil",
		"menu.permissions.title": "Oprávnenia",
		"menu.schemas.title": "Schémy",
		
		"menu.new.person.lower.level": "Nová osoba",
		"menu.new.company.lower.level": "Nová spoločnosť",
		
		"menu.search.person.lower.level": "Hľadať osobu",
		"menu.search.member.lower.level": "Hľadať člena",
		"menu.search.player.lower.level": "Hľadať hráča",
		"menu.search.officer.lower.level": "Hľadať funkcionára",
		"menu.search.referee.lower.level": "Hľadať rozhodcu",
		"menu.search.coach.lower.level": "Hľadať trénera",
		"menu.search.company.lower.level": "Hľadať spoločnosť",
		"menu.search.club.lower.level": "Hľadať klub",
		"menu.search.association.lower.level": "Hľadať zväz",
		"menu.search.statistic.lower.level": "Hľadať štatistika",
		"menu.search.medic.lower.level": "Hľadať zdravotníka",
				
		"menu.new.lower.level": "Nový",
		"menu.new.lower.level.she": "Nová",
		"menu.search.lower.level": "Hľadať",
		"menu.profile.lower.level": "Profil",
		"menu.change.password.lower.level": "Zmena hesla",
		"menu.new.group.lower.level": "Nová skupina",
		"menu.permission.groups.lower.level": "Skupiny oprávnení",
		"menu.user.permissions.lower.level": "Oprávnenia používateľov",
		"menu.schema.list.lower.level": "Zoznam schém",
		"menu.new.profile.lower.level":"Nový bezpečnostný profil",
		"menu.profiles.lower.level":"Hľadať bezpečnostný profil",
		"menu.statistics.title":"Štatistiky",
		"menu.statistics.show.title":"Zobraziť",
		"menu.massmailing.title":"Hromadná pošta",
		"menu.massmailing.new.lower.level":"Nový vzor", 
		"menu.massmailing.search.lower.level":"Vyhľadáť",
		"menu.massmailing.send.title":"Odoslať",

		"schema.statistics.view":"Štatistiky",
		"schema.statistics.baseData":"Základné",
		"schema.statistics.member.count":"Počet členov",
		"schema.statistics.women.count":"Počet žien",
		
		"schema.fees.new":"Nový príspevok",
		"schema.fees.baseData":"Základné údaje",
		"schema.fees.listFields.name":"Meno",
		"schema.fees.listFields.surName":"Priezvisko",
		"schema.fees.baseData.member":"Člen",
		"schema.fees.baseData.membershipFee":"Výška príspevku",
		"schema.fees.baseData.setupDate":"Dátum vystavenia",
		"schema.fees.baseData.variableSymbol":"Variabilný symbol",
		"schema.fees.baseData.dueDate":"Dátum splatnosti",
		"schema.fees.baseData.membershipFeePaid":"Zaplatená čiastka",
		"schema.fees.baseData.dateOfPayment":"Dátum zaplatenia",
		"schema.fees.baseData.notes":"Poznámka",
		"schema.fees.baseData.feePaymentStatus":"Stav",
		"schema.fees.baseData.feePaymentStatus.paid":"Zaplatené",
		"schema.fees.baseData.feePaymentStatus.unpaid":"Nezaplatené",
		"schema.fees.view":"Členský príspevok",
		"schema.fees.search":"Členský príspevok",
	
		"schema.people.baseData": "Základné údaje",
		"schema.people.identifier": "Identifikačné číslo",
		"schema.people.registrationID": "Registračné číslo",
		"schema.people.name": "Meno",
		"schema.people.surName": "Priezvisko",
		"schema.people.bornName": "Rodné priezvisko",
		"schema.people.title.before":"Titul pred",
		"schema.people.title.after":"Titul za",
		"schema.people.birthDate":"Dátum narodenia",
		"schema.people.gender":"Pohlavie",
		"schema.people.gender.man": "Muž",
		"schema.people.gender.woman": "Žena",
		
		"schema.people.player": "Hráč",
		"schema.people.isPlayer":"Je hráč",
		"schema.people.player.view":"Profil hráča",
		"schema.people.player.search":"Hráč",
		"schema.people.playerLicense":"Číslo HL",
		"schema.people.clubOfFirstRegistration":"Materský klub",
		"schema.people.club":"Klubová príslušnosť",
		"schema.people.stateOfPlayer":"schema.people.stateOfPlayer",
		"schema.people.expirationOfProffesionalContract":"Profesionálna zmluva",
		"schema.people.expirationOfAgentContract":"Zmluva s agentom",
		"schema.people.expiration":"Platnosť do",
		"schema.people.registrationCanceled":"Zrušená registrácia",
		"schema.people.dateOfRegistration":"Dátum registrácie",
		"schema.people.dateOfExpiration":"Dátum platnosti preukazu",
		"schema.people.dateOfApplicationForId":"Dátum začiatku platnosti preukazu",
		"schema.people.hostingStartDate":"Dátum začiatku hosťovania",
		"schema.people.hostingEndDate":"Dátum konca hosťovania",
		"schema.people.validFrom":"Dátum platnosti",
		"schema.people.validTo":"Doba platnosti",
		"schema.people.modifiedOn":"Dátum aktualizácie",
		
		"schema.people.coach":"Tréner",
		"schema.people.isCoach":"Je tréner",
		"schema.people.coach.firstAssociation":"Prvotný zväz",
		"schema.people.coach.stateOfCoach":"Stav trénera",
		"schema.people.coach.association":"Aktuálny zväz",
		"schema.people.coach.firstYear":"Rok začiatku kariéry",
		"schema.people.coach.proffesionalCompetence":"Odborná spôsobilosť od (rok)",
		"schema.people.coach.dateOfRegistration":"Dátum registrácie",
		"schema.people.coach.coachLicense":"Trénerská licencia",
		"schema.people.coach.coachLicenseType":"Typ licencie",
		"schema.people.coach.dateOfExpiration":"Dátum platnosti preukazu",
		"schema.people.coach.dateOfApplicationForId":"Dátum začiatku platnosti preukazu",
		"schema.people.coach.feeDate":"Poplatky",
		"schema.people.coach.licenseSeminar":"Licenčný seminár",
		"schema.people.coach.view":"Profil trénera",
		"schema.people.coach.search":"Tréner",
		
		"schema.people.referee":"Rozhodca",
		"schema.people.isReferee":"Je rozhodca",
		"schema.people.referee.firstAssociation":"Prvotný zväz",
		"schema.people.referee.stateOfReferee":"Stav rozhodcu",
		"schema.people.referee.association":"Aktuálny zväz",
		"schema.people.referee.firstYear":"Rok začiatku kariéry",
		"schema.people.referee.proffesionalCompetence":"Odborná spôsobilosť od (rok)",
		"schema.people.referee.dateOfRegistration":"Dátum registrácie",
		"schema.people.referee.refereeLicense":"Rozhodcovská licencia",
		"schema.people.referee.dateOfExpiration":"Dátum platnosti preukazu",
		"schema.people.referee.dateOfApplicationForId":"Dátum začiatku platnosti preukazu",
		"schema.people.referee.view":"Profil rozhodcu",
		"schema.people.referee.search":"Rozhodca",
		
		"schema.people.officer":"Funkcionár",
		"schema.people.isOfficer":"Je funkcionár",
		"schema.people.officer.association":"Aktuálny zväz",
		"schema.people.officer.club":"Klubová príslušnosť",
		"schema.people.officer.note":"Poznámka",
		"schema.people.officer.dateOfRegistration":"Dátum registrácie",
		"schema.people.officer.expiration":"Platnosť do",
		"schema.people.officer.stateOfOfficer":"Stav funkcionára",
		"schema.people.officer.dateOfExpiration":"Dátum platnosti preukazu",
		"schema.people.officer.dateOfApplicationForId":"Dátum začiatku platnosti preukazu",
		"schema.people.officer.view":"Profil funkcionára",
		"schema.people.officer.search":"Funkcionár",

		"schema.people.medic":"Zdravotník",
		"schema.people.isMedic":"Je zdravotník",
		"schema.people.medic.stateOfMedic":"Stav zdravotníka",
		"schema.people.medic.dateOfExpiration":"Dátum platnosti preukazu",
		"schema.people.medic.dateOfApplicationForId":"Dátum začiatku platnosti preukazu",
		"schema.people.medic.validFrom":"Dátum platnosti",
		"schema.people.medic.validTo":"Doba platnosti",
		"schema.people.medic.modifiedOn":"Dátum aktualizácie",
		"schema.people.medic.view":"Profil zdravotníka",
		"schema.people.medic.search":"Zdravontík",
		
		"schema.people.statistic":"Štatistik",
		"schema.people.isStatistic":"Je štatistik",
		"schema.people.statistic.stateOfStatistic":"Stav štatistu",
		"schema.people.statistic.dateOfExpiration":"Dátum platnosti preukazu",
		"schema.people.statistic.dateOfApplicationForId":"Dátum začiatku platnosti preukazu",
		"schema.people.statistic.validFrom":"Dátum platnosti",
		"schema.people.statistic.validTo":"Doba platnosti",
		"schema.people.statistic.modifiedOn":"Dátum aktualizácie",
		"schema.people.statistic.view":"Profil štatistika",
		"schema.people.statistic.search":"Štatistik",
		
		"schema.people.baseData.nationality":"Štátna príslušnosť",
		"schema.people.photo":"Fotografia",
		"schema.people.photoInfo":"Fotografia",
		"schema.people.email":"E-mail",
		"schema.people.mobileNumber":"Mobil",
		"schema.people.phoneNumber":"Telefón",
		"schema.people.country":"Štát",
		"schema.people.zipCode":"PSČ",
		"schema.people.city":"Obec",
		"schema.people.houseNumber":"Číslo domu",
		"schema.people.street":"Ulica",
		"schema.people.contactInfo":"Kontaktné údaje",
		"schema.people.bankInfo":"Fakturačné údaje",
		"schema.people.bankAccount":"Číslo účtu",
		"schema.people.bankCode":"Kód banky",
		"schema.people.iban":"IBAN",
		"schema.people.swift":"SWIFT",
		"schema.people.otherInfo":"Ostatné údaje",
		"schema.people.idCardNumber":"Číslo OP",
		"schema.people.passportNumber":"Číslo pasu",
		"schema.people.isPhotoPublic":"Je fotka verejná",
		"schema.people.note":"Poznámka",
		"schema.people.language":"Jazykové znalosti",
		
		"schema.people.idInfo":"Registračný preukaz",
		"schema.people.idInfo.currnetId":"Aktuálne číslo preukazu člena",
		"schema.people.idInfo.dateOfExpiration":"Dátum platnosti preukazu",
		"schema.people.idInfo.dateOfApplicationForId":"Dátum začiatku platnosti preukazu",
		
		"schema.people.state.of.person":"Stav osoby",
		"schema.people.profile.yes":"Áno",
		"schema.people.profile.no":"Nie",
		"schema.people.state.of.person.active":"Aktívna",
		"schema.people.state.of.person.inactive":"Neaktívna",
		"schema.people.state.of.referee.active":"Aktívny",
		"schema.people.state.of.referee.inactive":"Neaktívny",
		"schema.people.state.of.coach.active":"Aktívny",
		"schema.people.state.of.coach.inactive":"Neaktívny",
		"schema.people.state.of.officer.active":"Aktívny",
		"schema.people.state.of.officer.inactive":"Neaktívny",
		"schema.people.state.of.medic.active":"Aktívny",
		"schema.people.state.of.medic.inactive":"Neaktívny",
		"schema.people.state.of.statistic.active":"Aktívny",
		"schema.people.state.of.statistic.inactive":"Neaktívny",
		"schema.people.state.of.agent.active":"Aktívny",
		"schema.people.state.of.agent.inactive":"Neaktívny",
		"schema.people.state.of.player.active":"Aktívny",
		"schema.people.state.of.player.inactive":"Neaktívny",
		
		"schema.stadium.type.hall":"Hala",
		"schema.stadium.type.playground":"Ihrisko",
		"schema.stadium.type.stadium":"Štadión",
		"schema.stadium.surface.natural":"Prírodný",
		"schema.stadium.surface.artificial":"Umelý",
		
		"schema.club.state.active":"Aktívny",
		"schema.club.state.inactive":"Neaktívny",
		"schema.club.notPaying.yes":"Áno",
		"schema.club.notPaying.no":"Nie",

		"schema.association.state.active":"Aktívny",
		"schema.association.state.inactive":"Neaktívny",
		"schema.association.notPaying.yes":"Áno",
		"schema.association.notPaying.no":"Nie",
		
		"schema.transfer.typ.transfer":"Prestup",
		"schema.transfer.typ.hosting":"Hosťovanie",
		"schema.transfer.typ.alternating.start":"Striedavý štart",
		"schema.transfer.typ.foreign.transfer":"Zahr. prestup",
		"schema.transfer.state.approved":"Schválený",
		"schema.transfer.state.unapproved":"Neschváleny",
		"schema.transfer.state.cancel":"Storno",
		"schema.transfer.state.in.process":"V riešení",
		"schema.transfer.active.yes":"Áno",
		"schema.transfer.active.no":"Nie",
		
		"schema.competition.gender.man":"Muž",
		"schema.competition.gender.woman":"Žena",
		
		"schema.org.logoInfo":"Logo",
		"schema.org.logo":"Logo",
		"schema.org.baseData":"Základné údaje",
		"schema.org.name":"Registrovaný názov organizácie",
		"schema.org.identifier":"Identifikátor",
		"schema.org.contactInfo":"Kontaktné údaje",
		"schema.org.street":"Ulica",
		"schema.org.houseNumber":"Číslo domu",
		"schema.org.city":"Obec",
		"schema.org.zipCode":"PSČ",
		"schema.org.country":"Štát",
		"schema.org.phoneNumber":"Telefón",
		"schema.org.mobileNumber":"Mobil",
		"schema.org.email":"E-mail",
		"schema.org.bankInfo":"Fakturačné údaje",
		"schema.org.merchantName":"Obchodný názov spoločnosti",
		"schema.org.statutarOrgan":"Štatutárny orgán",
		"schema.org.stateOfOrganization":"Stav organizácie",
		"schema.org.ico":"IČO",
		"schema.org.dic":"DIČ",
		"schema.org.icDPH":" Číslo IČ DPH",
		"schema.org.country.icDPH":" Kód štátu pre IČ DPH",
		"schema.org.bankAccount":"Číslo účtu",
		"schema.org.bankCode":"Kód banky",
		"schema.org.bank":"Názov banky",
		"schema.org.iban":"IBAN",
		"schema.org.swift":"SWIFT",
		"schema.org.otherInfo":"Ostatné informácie",
		"schema.org.note":"Poznámka",
		"schema.org.view":"Organizácia",
		
		"schema.member.title": "Môj profil",
		"schema.member.new":"Nová osoba",
		"schema.member.view":"Profil osoby",
		"schema.member.search":"Osoba"
	});
	
	$translateProvider.translations('cz', {
		"menu.member.title": "Člen",
		"menu.player.title": "Hráč",
		"menu.fees.title": "Poplatek",
		"menu.referee.title": "Rozhodca",
		"menu.coach.title": "Tréner",
		"menu.stadium.title": "Štadión",
		"menu.event.title":"Údalosť",
		"menu.club.title": "Klub",
		"menu.association.title": "Zväz",
		"menu.person.title": "Osoba",
		"menu.transfer.title": "Zmena kl. príslušnosti",
		"menu.season.title": "Súťažný ročník",
		"menu.age.category.title": "Veková kategória",
		"menu.roster.title": "Súpisky",
		"menu.competition.title": "Súťaž",
		"menu.company.title": "Organizace",
		"menu.my.profile.title": "Můj profil",
		"menu.permissions.title": "Oprávnění",
		"menu.schemas.title": "Schémata",

		"menu.new.person.lower.level": "Nová osoba",
		"menu.new.company.lower.level": "Nová společnosť",
		
		"menu.search.person.lower.level": "Hledat osobu",
		"menu.search.member.lower.level": "Hledat člena",
		"menu.search.player.lower.level": "Hledat hráča",
		"menu.search.officer.lower.level": "Hledat funkcionára",
		"menu.search.referee.lower.level": "Hledat rozhodcu",
		"menu.search.statistic.lower.level": "Hledat statistika",
		"menu.search.medic.lower.level": "Hledat zdravotníka",
		"menu.search.coach.lower.level": "Hledat trenéra",
		"menu.search.company.lower.level": "Hledat spoločnosť",
		"menu.search.club.lower.level": "Hledat klub",
		"menu.search.association.lower.level": "Hledat zväz",
		
		"menu.new.lower.level": "Nový",
		"menu.new.lower.level.she": "Nová",
		"menu.search.lower.level": "Hledat",
		"menu.profile.lower.level": "Profil",
		"menu.change.password.lower.level": "Změna hesla",
		"menu.new.group.lower.level": "Nová skupina",
		"menu.permission.groups.lower.level": "Skupiny oprávnění",
		"menu.user.permissions.lower.level": "Oprávnění uživatelů",
		"menu.schema.list.lower.level": "Seznam schémat",
		"menu.new.profile.lower.level":"Nový bezpečnostnej profil",
		"menu.profiles.lower.level":"Hledat bezpečnostnej profil",
		"menu.statistics.title":"Statistiky",
		"menu.statistics.show.title":"Zobrazit",
		"menu.massmailing.title":"Hromadní pošta",
		"menu.massmailing.new.lower.level":"Nový vzor", 
		"menu.massmailing.search.lower.level":"Vyhledat vzor",
		"menu.massmailing.send.title":"Odeslat",
		
		"schema.statistics.view":"Štatistiky",
		"schema.statistics.baseData":"Základné",
		"schema.statistics.member.count":"Počet členov",
		"schema.statistics.women.count":"Počet žien",
	
		"schema.fees.listFields.name":"Jméno",
		"schema.fees.listFields.surName":"Příjmení",
		"schema.fees.new":"Nový příspěvek",
		"schema.fees.baseData":"Základní údaje",
		"schema.fees.baseData.member":"Člen",
		"schema.fees.baseData.membershipFee":"Výše příspěvku",
		"schema.fees.baseData.setupDate":"Datum vystavení",
		"schema.fees.baseData.variableSymbol":"Variabilní symbol",
		"schema.fees.baseData.dueDate":"Datum splatnosti",
		"schema.fees.baseData.membershipFeePaid":"Zaplacená částka",
		"schema.fees.baseData.dateOfPayment":"Datum zaplacení",
		"schema.fees.baseData.notes":"Poznámka",
		"schema.fees.baseData.feePaymentStatus":"Stav",
		"schema.fees.baseData.feePaymentStatus.paid":"Zaplacené",
		"schema.fees.baseData.feePaymentStatus.unpaid":"Nezaplacené",
		"schema.fees.view":"Členský příspěvek",
		"schema.fees.search":"Členský příspěvek",
	
		"schema.people.baseData": "Základné údaje",
		"schema.people.identifier": "Identifikačné číslo",
		"schema.people.registrationID": "Registračné číslo",
		"schema.people.name": "Meno",
		"schema.people.surName": "Priezvisko",
		"schema.people.state.of.person":"Stav osoby",
		
		"schema.people.bornName": "Rodné priezvisko",
		"schema.people.title.before":"Titul pred",
		"schema.people.title.after":"Titul za",
		"schema.people.birthDate":"Dátum narodenia",
		"schema.people.gender":"Pohlavie",
		"schema.people.gender.man": "Muž",
		"schema.people.gender.woman": "Žena",
		
		"schema.people.player": "Hráč",
		"schema.people.isPlayer":"Je hráč",
		"schema.people.player.view":"Profil hráča",
		"schema.people.player.search":"Hráč",
		"schema.people.playerLicense":"Číslo HL",
		"schema.people.clubOfFirstRegistration":"Materský klub",
		"schema.people.club":"Klubová príslušnosť",
		"schema.people.stateOfPlayer":"schema.people.stateOfPlayer",
		"schema.people.expirationOfProffesionalContract":"Profesionálna zmluva",
		"schema.people.expirationOfAgentContract":"Zmluva s agentom",
		"schema.people.expiration":"Platnosť do",
		"schema.people.registrationCanceled":"Zrušená registrácia",
		"schema.people.dateOfRegistration":"Dátum registrácie",
		"schema.people.dateOfExpiration":"Dátum platnosti preukazu",
		"schema.people.dateOfApplicationForId":"Dátum začiatku platnosti preukazu",
		"schema.people.hostingStartDate":"Dátum začiatku hosťovania",
		"schema.people.hostingEndDate":"Dátum konca hosťovania",
		"schema.people.validFrom":"Dátum platnosti",
		"schema.people.validTo":"Doba platnosti",
		"schema.people.modifiedOn":"Dátum aktualizácie",
		
		"schema.people.coach":"Tréner",
		"schema.people.isCoach":"Je tréner",
		"schema.people.coach.firstAssociation":"Prvotný zväz",
		"schema.people.coach.stateOfCoach":"Stav trénera",
		"schema.people.coach.association":"Aktuálny zväz",
		"schema.people.coach.firstYear":"Rok začiatku kariéry",
		"schema.people.coach.proffesionalCompetence":"Odborná spôsobilosť od (rok)",
		"schema.people.coach.dateOfRegistration":"Dátum registrácie",
		"schema.people.coach.coachLicense":"Trénerská licencia",
		"schema.people.coach.coachLicenseType":"Typ licencie",
		"schema.people.coach.dateOfExpiration":"Dátum platnosti preukazu",
		"schema.people.coach.dateOfApplicationForId":"Dátum začiatku platnosti preukazu",
		"schema.people.coach.feeDate":"Poplatky",
		"schema.people.coach.licenseSeminar":"Licenčný seminár",
		"schema.people.coach.view":"Profil trénera",
		"schema.people.coach.search":"Tréner",

		"schema.people.referee":"Rozhodca",
		"schema.people.isReferee":"Je rozhodca",
		"schema.people.referee.firstAssociation":"Prvotný zväz",
		"schema.people.referee.stateOfReferee":"Stav rozhodcu",
		"schema.people.referee.association":"Aktuálny zväz",
		"schema.people.referee.firstYear":"Rok začiatku kariéry",
		"schema.people.referee.proffesionalCompetence":"Odborná spôsobilosť od (rok)",
		"schema.people.referee.dateOfRegistration":"Dátum registrácie",
		"schema.people.referee.refereeLicense":"Rozhodcovská licencia",
		"schema.people.referee.dateOfExpiration":"Dátum platnosti preukazu",
		"schema.people.referee.dateOfApplicationForId":"Dátum začiatku platnosti preukazu",
		"schema.people.referee.view":"Profil rozhodcu",
		"schema.people.referee.search":"Rozhodca",
		
		"schema.people.officer":"Funkcionár",
		"schema.people.isOfficer":"Je funkcionár",
		"schema.people.officer.association":"Aktuálny zväz",
		"schema.people.officer.club":"Klubová príslušnosť",
		"schema.people.officer.note":"Poznámka",
		"schema.people.officer.dateOfRegistration":"Dátum registrácie",
		"schema.people.officer.expiration":"Platnosť do",
		"schema.people.officer.stateOfOfficer":"Stav funkcionára",
		"schema.people.officer.dateOfExpiration":"Dátum platnosti preukazu",
		"schema.people.officer.dateOfApplicationForId":"Dátum začiatku platnosti preukazu",
		"schema.people.officer.view":"Profil funkcionára",
		"schema.people.officer.search":"Funkcionár",
		
		"schema.people.medic":"Zdravotník",
		"schema.people.isMedic":"Je zdravotník",
		"schema.people.medic.stateOfMedic":"Stav zdravotníka",
		"schema.people.medic.dateOfExpiration":"Dátum platnosti preukazu",
		"schema.people.medic.dateOfApplicationForId":"Dátum začiatku platnosti preukazu",
		"schema.people.medic.validFrom":"Dátum platnosti",
		"schema.people.medic.validTo":"Doba platnosti",
		"schema.people.medic.modifiedOn":"Dátum aktualizácie",
		"schema.people.medic.view":"Profil zdravotníka",
		"schema.people.medic.search":"Zdravontík",
		
		"schema.people.statistic":"Štatistik",
		"schema.people.isStatistic":"Je štatistik",
		"schema.people.statistic.stateOfStatistic":"Stav štatistu",
		"schema.people.statistic.dateOfExpiration":"Dátum platnosti preukazu",
		"schema.people.statistic.dateOfApplicationForId":"Dátum začiatku platnosti preukazu",
		"schema.people.statistic.validFrom":"Dátum platnosti",
		"schema.people.statistic.validTo":"Doba platnosti",
		"schema.people.statistic.modifiedOn":"Dátum aktualizácie",
		"schema.people.statistic.view":"Profil štatistika",
		"schema.people.statistic.search":"Štatistik",
		
		"schema.people.nationality":"Štátna príslušnosť",
		"schema.people.photo":"Fotografia",
		"schema.people.photoInfo":"Fotografie",
		"schema.people.email":"E-mail",
		"schema.people.mobileNumber":"Mobil",
		"schema.people.phoneNumber":"Telefón",
		"schema.people.country":"Štát",
		"schema.people.zipCode":"PSČ",
		"schema.people.city":"Obec",
		"schema.people.houseNumber":"Číslo domu",
		"schema.people.street":"Ulica",
		"schema.people.contactInfo":"Kontaktné údaje",
		"schema.people.bankInfo":"Fakturačné údaje",
		"schema.people.bankAccount":"Číslo účtu",
		"schema.people.bankCode":"Kód banky",
		"schema.people.iban":"IBAN",
		"schema.people.swift":"SWIFT",
		"schema.people.otherInfo":"Ostatné údaje",
		"schema.people.idCardNumber":"Číslo OP",
		"schema.people.passportNumber":"Číslo pasu",
		"schema.people.isPhotoPublic":"Je fotka verejná",
		"schema.people.note":"Poznámka",
		"schema.people.language":"Jazykové znalosti",

		"schema.people.state.of.person":"Stav osoby",
		"schema.people.profile.yes":"Áno",
		"schema.people.profile.no":"Nie",
		"schema.people.state.of.person.active":"Aktívna",
		"schema.people.state.of.person.inactive":"Neaktívna",
		"schema.people.state.of.referee.active":"Aktívny",
		"schema.people.state.of.referee.inactive":"Neaktívny",
		"schema.people.state.of.coach.active":"Aktívny",
		"schema.people.state.of.coach.inactive":"Neaktívny",
		"schema.people.state.of.officer.active":"Aktívny",
		"schema.people.state.of.officer.inactive":"Neaktívny",
		"schema.people.state.of.medic.active":"Aktívny",
		"schema.people.state.of.medic.inactive":"Neaktívny",
		"schema.people.state.of.statistic.active":"Aktívny",
		"schema.people.state.of.statistic.inactive":"Neaktívny",
		"schema.people.state.of.agent.active":"Aktívny",
		"schema.people.state.of.agent.inactive":"Neaktívny",
		
		"schema.stadium.type.hall":"Hala",
		"schema.stadium.type.playground":"Ihrisko",
		"schema.stadium.type.stadium":"Štadión",
		"schema.stadium.surface.natural":"Prírodný",
		"schema.stadium.surface.artificial":"Umelý",
		
		"schema.club.state.active":"Aktívny",
		"schema.club.state.inactive":"Neaktívny",
		"schema.club.notPaying.yes":"Áno",
		"schema.club.notPaying.no":"Nie",

		"schema.association.state.active":"Aktívny",
		"schema.association.state.inactive":"Neaktívny",
		"schema.association.notPaying.yes":"Áno",
		"schema.association.notPaying.no":"Nie",
		
		"schema.transfer.typ.transfer":"Prestup",
		"schema.transfer.typ.hosting":"Hosťovanie",
		"schema.transfer.typ.alternating.start":"Striedavý štart",
		"schema.transfer.typ.foreign.transfer":"Zahr. prestup",
		"schema.transfer.state.approved":"Schválený",
		"schema.transfer.state.unapproved":"Neschváleny",
		"schema.transfer.state.cancel":"Storno",
		"schema.transfer.state.in.process":"V riešení",
		"schema.transfer.active.yes":"Áno",
		"schema.transfer.active.no":"Nie",
		
		"schema.competition.gender.man":"Muž",
		"schema.competition.gender.woman":"Žena",
		
		"schema.org.logoInfo":"Loga",
		"schema.org.logo":"Logo",
		"schema.org.baseData":"Základné údaje",
		"schema.org.name":"Registrovaný názov organizácie",
		"schema.org.identifier":"Identifikátor",
		"schema.org.contactInfo":"Kontaktné údaje",
		"schema.org.street":"Ulica",
		"schema.org.houseNumber":"Číslo domu",
		"schema.org.city":"Obec",
		"schema.org.zipCode":"PSČ",
		"schema.org.country":"Štát",
		"schema.org.phoneNumber":"Telefón",
		"schema.org.mobileNumber":"Mobil",
		"schema.org.email":"E-mail",
		"schema.org.bankInfo":"Fakturačné údaje",
		"schema.org.merchantName":"Obchodný názov spoločnosti",
		"schema.org.statutarOrgan":"Štatutárny orgán",
		"schema.org.stateOfOrganization":"Stav organizácie",
		"schema.org.ico":"IČO",
		"schema.org.dic":"DIČ",
		"schema.org.icDPH":" Číslo IČ DPH",
		"schema.org.country.icDPH":" Kód štátu pre IČ DPH",
		"schema.org.bankAccount":"Číslo účtu",
		"schema.org.bankCode":"Kód banky",
		"schema.org.bank":"Názov banky",
		"schema.org.iban":"IBAN",
		"schema.org.swift":"SWIFT",
		"schema.org.otherInfo":"Ostatné informácie",
		"schema.org.note":"Poznámka",
		"schema.org.view":"Organizácia",

		"schema.member.title": "Môj profil",
		"schema.member.new":"Nová osoba",
		"schema.member.view":"Profil osoby",
		"schema.member.search":"Osoba"
	});
}]);