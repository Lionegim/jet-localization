import { Locale } from './locale';

export const locale: Locale = {
  name: 'hungarian',
  language: 'hu',
  items: [
    // General
    { source: 'Save', target: 'Megment' },
    { source: 'Create', target: 'Teremt' },
    { source: 'Duplicating', target: 'Másolás' },
    { source: 'Duplicate', target: 'Másolat' },
    { source: 'Mass Edit', target: 'Mass Edit' },
    { source: 'Export', target: 'Export' },
    { source: 'Import', target: 'Importálás' },
    { source: 'Delete', target: 'Töröl' },

    // Fields
    { source: 'optional', target: 'választható' },
    { source: 'choose', target: 'választ' },
    { source: 'Clear value', target: 'Tiszta érték' },
    { source: 'loading...', target: 'Betöltés...' },
    { source: 'Nothing found', target: 'Nincs találat' },
    { source: 'Search...', target: 'Keresés...' },
    { source: 'Enter at least {0} characters', target: 'Írjon be legalább {0} karaktert' },

    // List components
    { source: 'Filter', target: 'Szűrő' },
    { source: 'Filter by field', target: 'Szűrőmezőn szűrő' },
    { source: 'Filter by...', target: 'Szűrés vlami alapján...' },
    { source: 'Back', target: 'Vissza' },
    { source: 'Back to {0} fields', target: 'Vissza a {0} mezőkhöz' },
    { source: 'Choose {0} from list', target: 'Válassza a {0} lehetőséget a listából' },
    { source: '{0} fields', target: '{0} mezők' },
    { source: '{0} relationships', target: '{0} kapcsolatok' },
    { source: 'Aggregate {0}', target: 'Összesített {0}' },
    { source: 'No fields to select', target: 'Nincsenek kiválasztandó mezők' },
    { source: 'Enter value...', target: 'Írja be az értéket ...' },
    { source: 'Exclude', target: 'Kizárás' },
    { source: 'Actions', target: 'Akciók' },
    { source: 'Search', target: 'Keresés' },
    { source: 'Sort 1 → 9', target: 'Válassza az 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Válassza az 9 → 1' },
    { source: 'Sort A → Z', target: 'Rendezze A → Z' },
    { source: 'Sort Z → A', target: 'Rendezze Z → A' },
    { source: 'Refresh automatically', target: 'Automatikus frissítés' },
    { source: 'All', target: 'Összes' },
    { source: 'Selected', target: 'Kiválasztott' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Sajnos nem található a lekérdezésének megfelelő {0}'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'A(z) {0} lekérése folyamatban van, kérem, várjon...' },
    { source: 'Add filter', target: 'Szűrő hozzáadása' },
    { source: 'Delete this filter', target: 'Törölje ezt a szűrőt' },
    { source: 'Toggle ordering', target: 'Váltsd át a rendelést' },
    { source: 'Loading failed', target: 'A betöltés nem sikerült' },
    { source: 'Not configured', target: 'Nincs beállítva' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Sajnos ez az összetevő még nincs konfigurálva'
    },
    { source: 'records', target: 'rekordokat' },
    { source: '{0} items', target: '{0} elem' },

    // Menu
    { source: 'Users & Teams', target: 'Felhasználók' },
    { source: 'Billing', target: 'Számlázás' },
    { source: 'Billing & Plans', target: 'Számlázás' },
    { source: 'API keys', target: 'API kulcsok' },
    { source: 'Dark Mode', target: 'Sötét mód' },
    { source: 'Light Mode', target: 'Fény mód' },
    { source: 'Disable Staff', target: 'A személyzet letiltása' },
    { source: 'Enable Staff', target: 'Személyzet engedélyezése' },
    { source: 'Manage Templates', target: 'Sablonok kezelése' },
    { source: 'Logout', target: 'Kijelentkezés' },
    { source: 'Activity Log', target: 'Naplót' },
    { source: 'Collaborations', target: 'Együttműködések' },
    { source: 'Open Visual Builder', target: 'Nyissa meg a Visual Builder alkalmazást' },

    // Filters
    { source: 'equals', target: 'egyenlő' },
    { source: 'does not equal', target: 'nem egyenlő' },
    { source: '{0} equals {1}', target: '{0} megegyezik {1}' },
    { source: '{0} does not equal {1}', target: '{0} nem egyenlő {1}' },

    { source: 'contains', target: 'tartalmaz' },
    { source: 'does not contain', target: 'nem tartalmaz' },
    { source: '{0} contains {1}', target: '{0} tartalmaz {1}' },
    { source: '{0} not contains {1}', target: '{0} nem tartalmaz {1}' },

    { source: 'starts with', target: '-vel kezdődik' },
    { source: 'does not start with', target: 'nem kezdődik' },
    { source: '{0} starts with {1}', target: '{0} a {1} -el kezdődik' },
    { source: '{0} does not start with {1}', target: '{0} nem kezdődik a {1}' },

    { source: 'ends with', target: 'végződik' },
    { source: 'does not end with', target: 'nem ér véget' },
    { source: '{0} ends with {1}', target: '{0} a {1} -val ér véget' },
    { source: '{0} does not end with {1}', target: '{0} nem ér véget {1}' },

    { source: 'greater than', target: 'nagyobb, mint' },
    { source: 'is not greater than', target: 'nem nagyobb, mint' },
    { source: '{0} is greater than {1}', target: '{0} nagyobb, mint {1}' },
    { source: '{0} not greater than {1}', target: '{0} nem nagyobb, mint {1}' },

    { source: 'greater than or equals', target: 'nagyobb vagy egyenlő' },
    { source: 'is not greater than or equals', target: 'nem nagyobb, mint vagy egyenlő' },
    { source: '{0} is greater than or equals {1}', target: '{0} nagyobb, mint vagy egyenlő {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} nem nagyobb vagy egyenlő {1}' },

    { source: 'less than', target: 'kevesebb, mint' },
    { source: 'is not less than', target: 'nem kevesebb, mint' },
    { source: '{0} is less than {1}', target: '{0} kevesebb, mint {1}' },
    { source: '{0} is not less than {1}', target: '{0} nem kevesebb, mint {1}' },

    { source: 'less than or equals', target: 'kisebb vagy egyenlő' },
    { source: 'is not less than or equals', target: 'nem kevesebb, mint vagy egyenlő' },
    { source: '{0} is less than or equals {1}', target: '{0} kevesebb vagy egyenlő {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} nem kevesebb, vagy egyenlő {1}' },

    { source: 'one of', target: 'az egyik' },
    { source: 'is one of', target: 'egyike a' },
    { source: 'is not one of', target: 'nem egyike' },
    { source: '{0} is one of {1}', target: '{0} a {1} egyike' },
    { source: '{0} is not one of {1}', target: '{0} nem egy a {1}' },

    { source: 'is null', target: 'nulla' },
    { source: 'is not null', target: 'nem nulla' },
    { source: '{0} is null', target: '{0} null' },
    { source: '{0} is not null', target: '{0} nem nulla' },

    { source: 'is future', target: 'a jövő' },
    { source: 'in the future', target: 'a jövőben' },
    { source: 'is not in the future', target: 'nincs a jövőben' },
    { source: '{0} is in the future', target: '{0} a jövőben van' },
    { source: '{0} is not in the future', target: '{0} a jövőben nincs' },

    { source: 'is past', target: 'elmúlt' },
    { source: 'in the past', target: 'a múltban' },
    { source: 'is not in the past', target: 'nincs a múltban' },
    { source: '{0} is in the past', target: '{0} a múltban van' },
    { source: '{0} is not in the past', target: '{0} nincs a múltban' },

    { source: 'is Today', target: 'ma van' },
    { source: 'today', target: 'Ma' },
    { source: 'is not today', target: 'ma nincs' },
    { source: '{0} is today', target: '{0} ma van' },
    { source: '{0} is not today', target: '{0} ma nincs' },

    { source: 'is Yesterday', target: 'tegnap van' },
    { source: 'yesterday', target: 'tegnap' },
    { source: 'is not yesterday', target: 'nincs tegnap' },
    { source: '{0} is yesterday', target: '{0} tegnap van' },
    { source: '{0} is not yesterday', target: '{0} nem tegnap van' },

    { source: 'is Last Week', target: 'a múlt hét' },
    { source: 'last week', target: 'múlt hét' },
    { source: 'is not last week', target: 'nincs a múlt héten' },
    { source: '{0} is last week', target: '{0} a múlt héten van' },
    { source: '{0} is not last week', target: '{0} nincs a múlt héten' },

    { source: 'is Last Month', target: 'az utolsó hónap' },
    { source: 'last month', target: 'múlt hónap' },
    { source: 'is not last month', target: 'nincs a múlt hónapban' },
    { source: '{0} is last month', target: '{0} a múlt hónapban van' },
    { source: '{0} is not last month', target: '{0} nincs a múlt hónapban' },

    { source: 'is Last Quarter', target: 'az utolsó negyed' },
    { source: 'last quarter', target: 'utolsó negyed' },
    { source: 'is not last quarter', target: 'nem utolsó negyedév' },
    { source: '{0} is last quarter', target: '{0} az utolsó negyedév' },
    { source: '{0} is not last quarter', target: '{0} nem az utolsó negyedév' },

    { source: 'is Last Year', target: 'tavaly van' },
    { source: 'last year', target: 'tavaly' },
    { source: 'is not last year', target: 'nem tavaly' },
    { source: '{0} is last year', target: '{0} tavaly van' },
    { source: '{0} is not last year', target: '{0} nem tavaly van' },

    { source: 'is Last X Days', target: 'az Utolsó X nap' },
    { source: 'last X days', target: 'utolsó x nap' },
    { source: 'is not last X days', target: 'nem tart x nap' },
    { source: '{0} is last {1} days', target: '{0} az utolsó {1} napok' },
    { source: '{0} is not last {1} days', target: '{0} nem tart be {1} napok' },

    { source: 'is Current Week', target: 'az aktuális hét' },
    { source: 'current week', target: 'aktuális hét' },
    { source: 'is not current week', target: 'nem az aktuális hét' },
    { source: '{0} is current week', target: '{0} az aktuális hét' },
    { source: '{0} is not current week', target: '{0} nem az aktuális hét' },

    { source: 'is Current Month', target: 'az aktuális hónap' },
    { source: 'current month', target: 'aktuális hónap' },
    { source: 'is not current month', target: 'nem az aktuális hónap' },
    { source: '{0} is current month', target: '{0} az aktuális hónap' },
    { source: '{0} is not current month', target: '{0} nem az aktuális hónap' },

    { source: 'is Current Quarter', target: 'az aktuális negyedév' },
    { source: 'current quarter', target: 'aktuális negyedév' },
    { source: 'is not current quarter', target: 'nem az aktuális negyedév' },
    { source: '{0} is current quarter', target: '{0} az aktuális negyedév' },
    { source: '{0} is not current quarter', target: '{0} nem az aktuális negyedév' },

    { source: 'is Current Year', target: 'az aktuális év' },
    { source: 'current year', target: 'aktuális év' },
    { source: 'is not current year', target: 'nem aktuális év' },
    { source: '{0} is current year', target: '{0} az aktuális évben van' },
    { source: '{0} is not current year', target: '{0} nem az aktuális év' },

    { source: 'is Previous Week', target: 'az előző hét' },
    { source: 'previous week', target: 'előző hét' },
    { source: 'is not previous week', target: 'nem az előző hét' },
    { source: '{0} is previous week', target: '{0} az előző hét' },
    { source: '{0} is not previous week', target: '{0} nem az előző hét' },

    { source: 'is Previous Month', target: 'az előző hónap' },
    { source: 'previous month', target: 'előző hónap' },
    { source: 'is not previous month', target: 'nem az előző hónap' },
    { source: '{0} is previous month', target: '{0} az előző hónap' },
    { source: '{0} is not previous month', target: '{0} nem az előző hónap' },

    { source: 'is Previous Quarter', target: 'az előző negyedév' },
    { source: 'previous quarter', target: 'előző negyedév' },
    { source: 'is not previous quarter', target: 'nem az előző negyedév' },
    { source: '{0} is previous quarter', target: '{0} az előző negyedév' },
    { source: '{0} is not previous quarter', target: '{0} nem az előző negyedév' },

    { source: 'is Previous Year', target: 'az Előző év' },
    { source: 'previous year', target: 'előző év' },
    { source: 'is not previous year', target: 'nem előző év' },
    { source: '{0} is previous year', target: '{0} az előző évben van' },
    { source: '{0} is not previous year', target: '{0} nem az előző év' },

    { source: 'is Previous X Days', target: 'az Előző X nap' },
    { source: 'previous X days', target: 'Az előző x napok' },
    { source: 'is not previous X days', target: 'nem az előző x napok' },
    { source: '{0} is previous {1} days', target: '{0} az előző {1} napok' },
    { source: '{0} is not previous {1} days', target: '{0} nem előző {1} napok' },

    { source: 'is empty', target: 'üres' },
    { source: 'is not empty', target: 'nem üres' },
    { source: '{0} is empty', target: '{0} üres' },
    { source: '{0} is not empty', target: '{0} nem üres' },

    { source: 'covered by', target: 'valamivel borítva' },
    { source: 'is not covered by', target: 'nem fedezi az általa' },
    { source: '{0} covered by {1}', target: '{0} {1} borítja' },
    { source: '{0} is not covered by {1}', target: '{0} nem fedezi a {1}' },

    // Activity log
    { source: 'No activities found', target: 'Nem található tevékenység' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Kezdje el az adatokkal való munkát a tevékenységek naplózásához.'
    },
    { source: 'All Activity', target: 'Minden tevékenység' },
    { source: 'Create Record', target: 'Rekord létrehozása' },
    { source: 'Update Record', target: 'Rekord frissítése' },
    { source: 'Delete Record', target: 'Rekord törlése' },
    { source: 'All Members', target: 'Minden tag' },

    // Collaboration
    { source: 'Timeline', target: 'Idővonal' },
    { source: 'Messages', target: 'üzenetek' },
    { source: 'Activity', target: 'Tevékenység' },
    { source: 'Start chatting with your team', target: 'Kezdj el csevegni a csapatoddal' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Üzenet küldése az aktuális oldalról a fontos információk nyomon követéséhez.'
    },
    { source: 'Your Message', target: 'Az üzeneted' },
    { source: 'Send', target: 'Küld' },

    // Share
    { source: 'Invite members', target: 'Tagok meghívása' },
    { source: 'Public share', target: 'Nyilvános megosztás' },
    { source: 'Sign Up', target: 'Regisztrálj' },
    { source: 'Members', target: 'tagok' },
    { source: 'Invite with Email', target: 'Meghívás e-mailben' },
    { source: 'Invite someone...', target: 'Hívj meg valakit...' },
    { source: 'Send Invite', target: 'Meghívó küldése' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Korlátozza az adatokhoz való hozzáférést a felhasználói tulajdonságok szerint'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Adja meg annak a felhasználónak az e-mail címét, akit szeretne meghívni az együttműködésre.'
    },
    { source: 'Copy', target: 'Másolat' },
    { source: 'Invite with Link', target: 'Meghívás linkkel' },
    { source: 'Remove link', target: 'Link eltávolítása' },
    { source: 'Add Invite Link', target: 'Meghívó link hozzáadása' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'A link birtokában bárki csatlakozhat a kiválasztott csapathoz.'
    },
    { source: 'Pending Invites', target: 'Függőben lévő meghívók' },
    { source: 'Cancel invite', target: 'Meghívás visszavonása' },
    { source: 'Active Members', target: 'Aktív tagok' },
    { source: 'Remove member', target: 'Tag eltávolítása' },
    { source: 'You are setting sharing for the current page', target: 'Az aktuális oldal megosztását állítja be' },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Megosztást állít be az alkalmazás összes oldalára.'
    },
    { source: 'Public access link', target: 'Nyilvános hozzáférési hivatkozás' },
    { source: 'Updating public access...', target: 'Nyilvános hozzáférés frissítése...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'A link birtokában bárki megtekintheti az aktuális oldalt. Így az aktuális oldalt egy másik webhelybe is beágyazhatja.'
    },
    { source: 'Embed code (IFRAME)', target: 'Beágyazási kód (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Illessze be ezt a kódot webhelye HTML-kódjába, ahol meg szeretné jeleníteni az aktuális oldalt.'
    },
    { source: 'link', target: 'link' },
    { source: 'invited', target: 'meghívott' },
    { source: 'Choose Team', target: 'Válassza a Csapat lehetőséget' },
    { source: 'App Teams', target: 'App Teams' },
    { source: 'Built-In Teams', target: 'Beépített csapatok' },
    { source: 'Clear Team', target: 'Tiszta csapat' },
    { source: 'Can build application and modify data', target: 'Alkalmazást készíthet és adatokat módosíthat' },
    { source: 'Can modify data in application', target: 'Módosíthatja az adatokat az alkalmazásban' },
    { source: 'Can only view data without modification', target: 'Csak az adatok megtekintése módosítás nélkül' },
    { source: 'Add Team', target: 'Csapat hozzáadása' },
    { source: 'Edit Team', target: 'Csapat szerkesztése' },
    { source: 'Adding Team', target: 'Csapat hozzáadása' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Tartsa kézben, hogy ki férhet hozzá az aktuális alkalmazáshoz'
    },
    { source: 'Enter Team Name', target: 'Írja be a csapat nevét' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Írja be a csapat nevét, azaz: Támogatás, Értékesítés, Marketing stb.'
    },
    { source: 'Add a new member to this team.', target: 'Új tag hozzáadása ehhez a csapathoz.' },
    { source: 'Invite new member', target: 'Új tag meghívása' },
    { source: 'User', target: 'Felhasználó' },
    { source: 'Date Added', target: 'dátum hozzáadva' },
    { source: 'You', target: 'Ön' },
    { source: 'Edit', target: 'Szerkesztés' },
    { source: 'No users in this team', target: 'Nincsenek felhasználók ebben a csapatban' },
    { source: 'Page Permissions', target: 'Oldalengedélyek' },
    { source: 'App Permissions', target: 'Alkalmazásengedélyek' },
    { source: 'Properties', target: 'Tulajdonságok' },
    { source: 'Page name', target: 'Az oldal neve' },
    { source: 'Access', target: 'Hozzáférés' },
    { source: 'Full Access', target: 'Teljes hozzáférés' },
    { source: 'Read Only', target: 'Csak olvasható' },
    { source: 'No Access', target: 'Nincs hozzáférés' },
    { source: 'Read', target: 'Olvas' },
    { source: 'Update', target: 'Frissítés' },
    { source: 'Write', target: 'Ír' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Töröl' },
    { source: 'Custom Access', target: 'Egyéni hozzáférés' },
    { source: 'Read, create, update and delete data', target: 'Adatok olvasása, létrehozása, frissítése és törlése' },
    { source: 'Choose allowed operations granularly', target: 'Válassza ki az engedélyezett műveleteket részletesen' },
    { source: 'Without any access to data', target: 'Adatokhoz való hozzáférés nélkül' },
    { source: 'Name', target: 'Név' },
    { source: 'Active', target: 'Aktív' },
    { source: 'Settings', target: 'Beállítások' },
    { source: 'Members and Teams', target: 'Tagok és csapatok' },
    { source: 'App Builder', target: 'App Builder' },
    { source: 'Collection Permissions', target: 'Gyűjtemény engedélyei' },
    { source: "Grant permissions to app's collection", target: 'Engedélyek megadása az alkalmazás gyűjteményéhez' },
    { source: 'Collection', target: 'Gyűjtemény' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Korlátozza az adatokhoz való hozzáférést a csapat tulajdonságai szerint'
    },
    { source: 'Cancel', target: 'Megszünteti' },
    { source: 'Save Team', target: 'Csapat mentése' },
    { source: 'Create Team', target: 'Csapat létrehozása' },
    { source: 'Value', target: 'Érték' },
    { source: 'No properties specified', target: 'Nincsenek megadva tulajdonságok' },

    // Navigation
    { source: 'Current App', target: 'Jelenlegi alkalmazás' },
    { source: 'Home', target: 'itthon' },

    // Profile
    { source: 'Loading', target: 'Betöltés' },
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Felhasználói adatok beolvasása folyamatban van, kérem, várjon...'
    },
    { source: 'Profile Settings', target: 'Profilbeállítások' },
    { source: 'Basic information about your account.', target: 'Alapvető információk a fiókjáról.' },
    { source: 'Photo', target: 'Fénykép' },
    { source: 'your photo', target: 'a te képed' },
    { source: 'Change', target: 'változás' },
    { source: 'Upload', target: 'Feltöltés' },
    { source: 'First Name', target: 'Keresztnév' },
    { source: 'Last Name', target: 'Vezetéknév' },
    { source: 'Your Email', target: 'Az email címed' },
    { source: 'Password Change', target: 'Jelszó változtatás' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'A jelszónak elég erősnek kell lennie ahhoz, hogy megvédje fiókját, ezért legyen legalább 12 karakter hosszú.'
    },
    { source: 'Current Password', target: 'jelenlegi jelszó' },
    { source: 'New Password', target: 'új jelszó' },
    { source: 'Confirm New Password', target: 'Erősítse meg az új jelszót' },
    { source: 'Change Password', target: 'Jelszó módosítása' },
    { source: 'Personal Preferences', target: 'Személyes preferenciák' },
    { source: 'Language', target: 'Nyelv' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Személyre szabhatja fiókja további beállításait.'
    },
    { source: 'News & Proposals', target: 'hírek' },
    { source: 'Subscribe to our updates and proposals.', target: 'Iratkozzon fel frissítéseinkre és ajánlatainkra.' },
    { source: 'Save changes', target: 'Változtatások mentése' },

    // My Apps
    { source: 'Type to search...', target: 'Gépeljen a kereséshez...' },
    { source: 'My Apps', target: 'Alkalmazásaim' },
    { source: 'New App', target: 'Új alkalmazás' },
    { source: 'Builder', target: 'Építész' },
    { source: 'App', target: 'App' },
    { source: 'continue install', target: 'folytassa a telepítést' },
    { source: 'Open builder', target: 'Nyissa meg az építőt' },
    { source: 'View published', target: 'Megtekintés közzétéve' },
    { source: 'Delete App', target: 'Alkalmazás törlése' },
    { source: 'Start from a template', target: 'Kezdje sablonból' },
    { source: 'Preview', target: 'Előnézet' },
    { source: 'Contact Support', target: 'Lépjen kapcsolatba az ügyfélszolgálattal' },
    { source: 'Documentation', target: 'Dokumentáció' },
    { source: 'Feature Requests', target: 'Funkciókérés' },
    { source: 'See What’s New', target: 'Tekintse meg az Újdonságokat' },
    { source: 'Search templates...', target: 'Keresési sablonok...' },
    { source: 'any', target: 'Bármi' },
    { source: 'more', target: 'több' },
    { source: 'Choose Data Source', target: 'Válassza az Adatforrás lehetőséget' },
    { source: 'works with 30+ data sources', target: '30 adatforrással működik' },
    { source: 'Use this template', target: 'Használja ezt a sablont' },
    { source: 'stores data in Jet Tables', target: 'Jet Tables-ben tárolja az adatokat' },
    { source: 'New Data', target: 'Új adatok' },
    { source: 'using {0}', target: '{0} használatával' },
    { source: "Can't find resource you're looking for?", target: 'Nem találja a keresett forrást?' },
    { source: 'Admin Panel', target: 'Adminisztrációs Panel' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Listázzon, hozzon létre és frissítsen (CRUD) műveleteket az adatokon'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Hozzon létre egyéni adminisztrációs panelt bármilyen adatbázis, alkalmazás és API, például a Stripe, Twilio és GraphQL alapján.'
    },
    { source: 'All Integrations', target: 'Minden integráció' },
    { source: 'Databases', target: 'Adatbázisok' },
    { source: 'APIs', target: 'API-k' },
    { source: 'Frameworks', target: 'Keretrendszerek' },
    { source: 'Storages', target: 'Tárolók' },

    // Sign In
    { source: 'Please wait...', target: 'Kérlek várj...' },
    { source: 'Good morning', target: 'Jó reggelt kívánok' },
    { source: 'Good afternoon', target: 'Jó napot' },
    { source: 'Good evening', target: 'Jó estét' },
    { source: 'Sign In', target: 'Bejelentkezés' },
    { source: 'Welcome Back.', target: 'Üdv újra.' },
    { source: 'Sign in with {0}', target: 'Bejelentkezés a következővel: {0}' },
    { source: 'or login with', target: 'vagy jelentkezzen be' },
    { source: 'Enter E-mail', target: 'Írja be az E-mail címet' },
    { source: 'Enter password', target: 'Írd be a jelszót' },
    { source: 'Login', target: 'Belépés' },
    { source: 'Create new account', target: 'Új fiók létrehozása' },
    { source: 'Forgot my password', target: 'Elfelejtettem a jelszavam' },
    { source: 'required', target: 'kívánt' },
    { source: 'incorrect Email', target: 'helytelen e-mail' },
    { source: 'Minimum password length {0}', target: 'A jelszó minimális hossza: {0}' },
    { source: 'Unable to Sign In', target: 'Képtelen bejelentkezni' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Kezdje el <span class="auth-form__accent">ingyenesen még ma</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Nem szükséges kártya. A 14 napos PRO-próbaidőszak alatt az összes fejlett funkciót ingyen megkapja.'
    },
    { source: 'or', target: 'vagy' },
    { source: 'Enter First Name', target: 'Írja be a keresztnevet' },
    { source: 'Enter Last Name (optional)', target: 'Írja be a vezetéknevet (nem kötelező)' },
    { source: 'Enter Email', target: 'Írja be az e-mail címet' },
    { source: 'Password', target: 'Jelszó' },
    { source: 'Repeat Password', target: 'Jelszó újra' },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'A fiók létrehozása azt jelenti, hogy minden rendben van velünk'
    },
    { source: 'Terms of Service', target: 'Szolgáltatási feltételek' },
    { source: 'Privacy Policy', target: 'Adatvédelmi irányelvek' },
    { source: 'and', target: 'és' },
    { source: 'Create your free account', target: 'Készítsd el az ingyenes fiókodat' },
    { source: 'Already have an account', target: 'Már van fiókja' },
    { source: 'Unable to Sign Up', target: 'Nem lehet regisztrálni' },

    // Restore password
    { source: 'Reset your password', target: 'Állítsd vissza a jelszavad' },
    { source: 'Email Address', target: 'Email cím' },
    { source: 'Reset password', target: 'Jelszó visszaállítása' },
    { source: 'Return to Sign In', target: 'Vissza a Bejelentkezéshez' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Kérjük, ellenőrizze e-mailjét – <strong>{0}</strong> . Elküldtük az érvényesítési linket, amelyet a jelszó megváltoztatásához kell követnie.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: 'Majdnem kész, csak írja be alább az új jelszavát.<br> Legalább 8 karakterből kell állnia.'
    },
    { source: 'Reset password & Sign In', target: 'Jelszó visszaállítása' },
    { source: 'Unable to Send Code', target: 'Nem lehet kódot küldeni' },
    { source: 'Unable to Change Password', target: 'Nem lehet jelszót módosítani' },

    // Users & Teams
    { source: 'Members of {0}', target: 'A(z) {0} tagjai' },
    { source: 'How to get started', target: 'Hogy kezdjed' },
    { source: 'Users API', target: 'Felhasználók API' },
    { source: 'Teams API', target: 'Teams API' },
    { source: 'Invite Member', target: 'Tag meghívása' },
    { source: 'Add User property', target: 'Felhasználói tulajdonság hozzáadása' },
    { source: 'Add Team property', target: 'Csapattulajdon hozzáadása' },
    { source: 'Add', target: 'Hozzáadás' },
    { source: 'Edit property', target: 'Tulajdonság szerkesztése' },
    { source: 'Delete property', target: 'Tulajdonság törlése' },
    { source: 'Users', target: 'Felhasználók' },
    { source: 'Teams', target: 'Csapatok' },
    { source: 'Search members', target: 'Tagok keresése' },
    { source: 'Search teams', target: 'Csapatok keresése' },
    { source: '{0} pages', target: '{0} oldal' },
    { source: 'No members', target: 'Nincsenek tagok' }
  ]
};
