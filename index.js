let firstNameId = 'first-name';

        let lastNameId;
        let addressId;
        let citiesId;

        let firstNameEl;
        let lastNameEl;
        let addressEl;
        let citiesEl;
        let avatarkaId = 'avatarka';
        avatarkaEl = document.getElementById(avatarkaId);
        firstNameEl = document.getElementById(firstNameId);


        lastNameId = 'last-name';
        addressId = 'address';
        citiesId = 'cities';


        lastNameEl = document.getElementById(lastNameId);
        addressEl = document.getElementById(addressId);
        citiesEl = document.getElementById(citiesId);

        //window.alert(firstNameEl.value);
        //window.alert(lastNameEl.className);
        //window.alert(addressEl.value);
        //window.alert(avatarkaEl.alt);
        firstNameEl.value = "Andrey";
        lastNameEl.className = "last-name default-input error-input";
        //lastNameEl.className = "name"
        avatarkaEl.src = "data:image/png;base64,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"
        avatarkaEl.title = "AVA";
        citiesEl.value = "Kiev";
        avatarkaEl.innerHTML = "<ul id='list'><li>1</li><li>2</li></ul>"
        let listId = "list";
        let numberList = document.getElementById(listId);
        window.alert(numberList.innerHTML);