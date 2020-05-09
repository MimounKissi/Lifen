Feature: Patient Page Information
	Background:
		Given A connected lifen user on the send box

  	Scenario Outline: Update patient lastName 
		And he uploads the document "<file>"
 	  	And he goes on the page information of the "<Name>"  
 	  	When he update the lastName with "<lastNameUpdate>"
 	  	Then the patient lastName should be "<lastNameUpdate>"
		Examples: 
		| file                    | Name            | lastNameUpdate     | lastNameUpdate |
      	| 5_dest.pdf              | JUNG camille    | Pablo              | Pablo          |
		| 1dest_1incertain.pdf    | DUPOND aristide | Carlos             | Carlos         |


 	Scenario Outline: Update patient firstName 
		And he uploads the document "<file>"
 	  	And he goes on the page information of the "<Name>"    
 	  	When he update the firstName with "<firstNameUpdate>"
 	  	Then the patient firstName should be "<firstNameUpdate>"
		Examples: 
		| file                    | Name            | firstNameUpdate    | firstNameUpdate |
      	| 5_dest.pdf              | JUNG camille    | Krenek             | Krenek          |
		| 1dest_1incertain.pdf    | DUPOND aristide | Edouard-Henri      | Edouard-Henri   |


  	Scenario Outline: Update patient birth date  
 	  	And he uploads the document "<file>"
 	  	And he goes on the page information of the "<Name>" 
 	  	When he update the birth date with "<birthDate>"
 	  	Then the patient birth date should be "<birthDate>"
		Examples: 
		| file                    | Name            | birthDate    | birthDate  |
      	| 5_dest.pdf              | JUNG camille    | 01/09/2000   | 01/09/2000 |
		| 1dest_1incertain.pdf    | DUPOND aristide | 25/06/1976   | 25/06/1976 |