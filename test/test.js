'use strict'

var tenderKeys = typeof window !== 'undefined' ? window.TenderKeys : require('../index');
var expect = typeof window !== 'undefined' ? window.expect : require('chai').expect;

var data = [
  {
    address: '6AE5EF855FE4F3771D1B6D6B73E21065ED7670EC',
    pubKey: '1474C7654BD711B910F48561FCEC85BC5FAE01B1D209CDF6B60D10F141EC7D5B',
    privKey: 'C01E3035C40C2FF009791C36755848F77EA9FAD484E4A38A17355C72A2C5EDB81474C7654BD711B910F48561FCEC85BC5FAE01B1D209CDF6B60D10F141EC7D5B'
  },
  {
    address: 'D7572DA8389D0C3AA64FC8709CA853AFE24F4260',
    pubKey: '56D2CE5823E4BF1D9621812DE9AFD65DE5786C6096D8C08B4B30C219D8AFC3EF',
    privKey: '85BB7D2E1856C281190FA174E7478F596BAFF265733C7AE6BE87E0DE10E57F3356D2CE5823E4BF1D9621812DE9AFD65DE5786C6096D8C08B4B30C219D8AFC3EF'
  },
  {
    address: 'B03DD2C47852775208A56FA10A49875ABC507343',
    pubKey: 'DBF0B307F5574A8EA652D6C7CC5C1917330344FB5E5EC296B90101BA477F3602',
    privKey: '59EF4EC05BFA65581FF4FFCA109B88FB6E63C65E3934040B3E38E8BFD2774E6BDBF0B307F5574A8EA652D6C7CC5C1917330344FB5E5EC296B90101BA477F3602'
  },
  {
    address: '89CB5A6C41AE7156BF493DD1FE934C8315FD0050',
    pubKey: '9A87ED7E8EA2F52E11A9D68EDF905C9A403D3478276CDB33A833D2A172209BA4',
    privKey: '6D921A9B40F47F7B5D13B989A1075811865687C6BE86A7B6BBE842A10F0F1C149A87ED7E8EA2F52E11A9D68EDF905C9A403D3478276CDB33A833D2A172209BA4'
  },
  {
    address: '29D08ABFD2704F37D683AC019653B6CAE1A0F043',
    pubKey: '3EDE3800921C32C3542BE00568EA14FE72BD638E7FC3D84EFA4EF3D45743E0BA',
    privKey: '7EC23D5D865DA626E7D24280619EB2787294CAC8EDCAE4F260F5CE6686EADD0B3EDE3800921C32C3542BE00568EA14FE72BD638E7FC3D84EFA4EF3D45743E0BA'
  },
  {
    address: 'DC24F7BED106AF247B64BBAE7488598B29FC78FC',
    pubKey: '9B818509CCBD5432ACBB063BC8B9183A0933E581B11567B9F4CD421374C6C4A0',
    privKey: '96933A93A425AFB129F2ACC133D6F8F5456B4BE44CA9535FAD9C1A77B193926F9B818509CCBD5432ACBB063BC8B9183A0933E581B11567B9F4CD421374C6C4A0'
  },
  {
    address: 'F886AFBC6E807A9EF44E00E6936510B450E77A56',
    pubKey: 'ACAC51AF81DBF715E2AD8FF19AA6618B088400B2C0D1F2996394263D464B9AAB',
    privKey: '7A8B1F2CD8C31B31C8354B8D93CFAD9222017BC7DF974C02CC003CC54C3BB344ACAC51AF81DBF715E2AD8FF19AA6618B088400B2C0D1F2996394263D464B9AAB'
  },
  {
    address: '15B7926835A7C2FD6D297E3ADECC5B45F7309F59',
    pubKey: '50D941ECE7CDD9E727C2117B4BBF2D06B9250AEFD865143140952FCE258C9A09',
    privKey: '73DD440F81BC3E73BD290D3FB334805C3C2C7D01F7A76C3D9138D751812F353350D941ECE7CDD9E727C2117B4BBF2D06B9250AEFD865143140952FCE258C9A09'
  },
  {
    address: '676CBB6F0C71031D0DD7C6A7FC4D838222ED83F2',
    pubKey: 'C2FA33D13F3017986D39C1E660467AE3647E9F2C7F3CDD9FD956190963F27CBC',
    privKey: '77D70913DC33EB46A4AB8949A8CDCB0177404E3CA7385FE64CB67F0F3DFBD14CC2FA33D13F3017986D39C1E660467AE3647E9F2C7F3CDD9FD956190963F27CBC'
  },
  {
    address: '997D223A5CED2A0155566C9DFC48564A6D619C87',
    pubKey: '355F27643827A5846EFB005FCFDF4AABB9F030A4798A557EE3D8F97499CD618F',
    privKey: 'B276D924C0752E6EAF6A0FFDE0CDF43F6EB157D59936128D2C6AF5BF8CEFFC47355F27643827A5846EFB005FCFDF4AABB9F030A4798A557EE3D8F97499CD618F'
  },
  {
    address: 'F3FBB8C4F09CF5F60A3F50F5D30519C60678FA51',
    pubKey: '365DED2CD098C091BFF9C4D6226B12C6CECEC11C2C4706D38459A072EF89CC5C',
    privKey: '570E4AED56E0A111DA1275B64DC8FC3428254E20CD9DEBFE2819CEE8750D28A9365DED2CD098C091BFF9C4D6226B12C6CECEC11C2C4706D38459A072EF89CC5C'
  },
  {
    address: '624FF17C3C645CFAF4303CE2A46EDFC6CEED5EFE',
    pubKey: 'EA2EDF7314E7C77416A8FB49AE2035987201880DCFAE322F217BA2E329A440A3',
    privKey: 'D0577EFE19414EA348652F2CDCCCE0D9C23E7D3F6CFBEEE5AEA0FC850FD726D6EA2EDF7314E7C77416A8FB49AE2035987201880DCFAE322F217BA2E329A440A3'
  },
  {
    address: '3EA699776522F42AF7A614FF8DD31B1ABF8999F3',
    pubKey: '7AFD13EF4D7290D02DFA8D88371E791D2D5C933D98C2D9F15374BD5A59B45F2B',
    privKey: 'D173CA22BB16E794ADF2B11E1D481E2D1BF409B6C9C2334D6CE9528EC26676237AFD13EF4D7290D02DFA8D88371E791D2D5C933D98C2D9F15374BD5A59B45F2B'
  },
  {
    address: 'F0E166DB4F3A4AC547888CE043B21B5F14BBFD48',
    pubKey: 'DC9E78817FFFF773259179889542349BC0CCE3634D874BA7A215E67BFFA14B8C',
    privKey: '73596F2DEEA6E340C37C77C4881922093D0DB0D910F4F571D22D03E784400150DC9E78817FFFF773259179889542349BC0CCE3634D874BA7A215E67BFFA14B8C'
  },
  {
    address: '77E24A77C015B5F99DC7A44A87DF021B48B02D6B',
    pubKey: 'FC024EB38E8D40309A50D12F53180AB5C7138FB9C6011AEF37A609A3DB074B9C',
    privKey: 'D608AAB9BE47490D50BD7AD6D358125B549BA5483089952F7AD408FF6B6F6D71FC024EB38E8D40309A50D12F53180AB5C7138FB9C6011AEF37A609A3DB074B9C'
  },
  {
    address: '87FACA9C2A9DAA718A67421502F614BB44A6F520',
    pubKey: 'E8D346C8C5F042C24151638CB3BA54ECD32EF28DAC71AABF8EDA1819BCFBFA5A',
    privKey: '8AFCE289B7111681544D1F6FDE358B311E8676F044F93F9085E16EA6A6B11536E8D346C8C5F042C24151638CB3BA54ECD32EF28DAC71AABF8EDA1819BCFBFA5A'
  },
  {
    address: '4B1207BBB80CDE31C155CB3C5EABE9DBC3E0EAC2',
    pubKey: '657D70B4FD810412BBE347E202F63F97ABD57CCC5F728DB573FC035F6597C151',
    privKey: 'BBD5AA4A1B5E7E09D66E9C104E614895C3D11CBF9759FAF38B25A8603D1764AC657D70B4FD810412BBE347E202F63F97ABD57CCC5F728DB573FC035F6597C151'
  },
  {
    address: '1CB5CF010E407AFC6249627BFD769D82D8DBBF71',
    pubKey: 'FA02D0E6B1CBB0FB6651885806FF2A92DE34F7FA306FDBC9D7725C26E4B1237B',
    privKey: '9E585CA19F673282DCC6EAC22041BF34E76CC407157806CCCAA33D9941C14712FA02D0E6B1CBB0FB6651885806FF2A92DE34F7FA306FDBC9D7725C26E4B1237B'
  },
  {
    address: '95AF87B1016850043D879C85F3263C83214F3544',
    pubKey: '21E5C194234B30E0C8E6B2A6277D492B45C32B6C41D78D8ADD1C4A22493D2909',
    privKey: '7B7ED4510D422BB640C706A01D18AB49B4157B0ABF5C50E5322F4D2E4FD0524921E5C194234B30E0C8E6B2A6277D492B45C32B6C41D78D8ADD1C4A22493D2909'
  },
  {
    address: 'EE33BF343AC963BDF67E9A451AF4510FF541D1EE',
    pubKey: '4A984488D19BC0039FB5D195BDA8149AD14EAF7EBF67B18E93A7C0F1BE197707',
    privKey: '3FFF53D6B37090F17A7DF0BEC862D6AEC1BC3340664CBA6086C136CA8C9122554A984488D19BC0039FB5D195BDA8149AD14EAF7EBF67B18E93A7C0F1BE197707'
  },
  {
    address: 'DA9BD94A350C14D7400CD9D9B7D0556C625511BB',
    pubKey: '1E635AB44575478B5CCAD1D70824E33BCF9B6FD64D2C8BBE369DB7F1C5F97791',
    privKey: '6AFE810F22C9A8CFC6377095261DB72224B655EF52B3E65E5045D7DED108279E1E635AB44575478B5CCAD1D70824E33BCF9B6FD64D2C8BBE369DB7F1C5F97791'
  },
  {
    address: 'EA16E3A730EF5B916B2187BADEE44783E58F5763',
    pubKey: '55830CFD26D2FD13D744F00AAB6F772A2559C5CDC1E006397C14F84B51C2A1E8',
    privKey: 'FDA9683B05C0ED1AC5A34019AC55AC04A790F6DE374B3A938BF88AFB4D5689F255830CFD26D2FD13D744F00AAB6F772A2559C5CDC1E006397C14F84B51C2A1E8'
  },
  {
    address: 'C429CE757AD1A3B87B3662F83411EE5786BC5C7C',
    pubKey: 'C19B5296F3F4BDEA7E91E0C1481401921F60CDF9235670504716E6709036239E',
    privKey: '84F8E09045C32501FCE8F7006C0FAA867948CDACF1D0AE3F6E4EE4E30C62667EC19B5296F3F4BDEA7E91E0C1481401921F60CDF9235670504716E6709036239E'
  },
  {
    address: 'E2BA1221889FDC47DD8A1F6B9F1BFA5C6F87326F',
    pubKey: 'AFFC028F3D7951DE76047A37F7E93161AFDE3C344EFD6455EAE1D5CB6725C591',
    privKey: '30511DBC6BF3FAF880EC480B987FE280A26A6FA8F50CFB9B91D5833FEEED540FAFFC028F3D7951DE76047A37F7E93161AFDE3C344EFD6455EAE1D5CB6725C591'
  },
  {
    address: 'C4BA41501B0CAC3996BE7407D5E722A096705475',
    pubKey: '06C67C392C731237AA8B98C702ED3F3704FACAE6E6959B668F8187E75D3DF0D7',
    privKey: 'D78072929A7EB3DDFDDA3783E6CCC755490CEC79FBCC4A089DF0A35EE183F50606C67C392C731237AA8B98C702ED3F3704FACAE6E6959B668F8187E75D3DF0D7'
  },
  {
    address: 'F8496558F1672952B28A1A1384EC293870BD08D3',
    pubKey: 'E86E7C0B2503EA658C80287F396CCEA5485A29F3741D1A72308BE54D294C6ADF',
    privKey: '9AF4B8F810B03406D06D900B1BA426E14F6CF1F5E2613E6D129A7D786595E1F2E86E7C0B2503EA658C80287F396CCEA5485A29F3741D1A72308BE54D294C6ADF'
  },
  {
    address: 'C49640F0ED5DF8259C72F8DCCEDF9179D5830611',
    pubKey: '9F59E937015EEAF7B527CD3B522EE837C496DDDF3550BE22CE0AC49374B5B2AE',
    privKey: '8FECA3CD541B2DC001ADF38DF51C66D6A63955C0FB1C865146AA658F604179629F59E937015EEAF7B527CD3B522EE837C496DDDF3550BE22CE0AC49374B5B2AE'
  },
  {
    address: '66336D11AA8F74E4C88CDD04F0F2C761B7E53408',
    pubKey: 'F99BBEE9EB7FCDA3748007EC95BDFCF505D674BAD306390AA9084A776A2AA380',
    privKey: '7DD86FB796EE4CC9BDDD07A7DEB79D9B3D00A97BC1B42F434959A34D3E8AB78BF99BBEE9EB7FCDA3748007EC95BDFCF505D674BAD306390AA9084A776A2AA380'
  },
  {
    address: '7E95E272A32C7D1A236DC0F044DD62F08504C42C',
    pubKey: 'E2E83F6B9F0AC3C750C52A5C83E3A0F5263D7208DC23887FF5AA0FB0AEC17DE7',
    privKey: 'E675C64E287076FE467A3227672CB4024080ED33E4485F14ABC07A35499D8CA4E2E83F6B9F0AC3C750C52A5C83E3A0F5263D7208DC23887FF5AA0FB0AEC17DE7'
  },
  {
    address: '406894F316F95DC83BFD2F6418BE0CC31C3163A0',
    pubKey: '2D47D0F43B27C57815E3317624742468D929544DF142ABA49AFFD9E00C8B1FCF',
    privKey: 'B3F4AE2C242ACEE2374C49990DD196361A88B25EDA473947A381830B3B4D418F2D47D0F43B27C57815E3317624742468D929544DF142ABA49AFFD9E00C8B1FCF'
  },
  {
    address: '57C3BC3FBA38BE582154D154625E8E469D7E3CA2',
    pubKey: '83947B39E512265E6BE034FD33E105C438685360C9868C11C5D2C54A8820CCAC',
    privKey: '5E5FB3D378EFA1BC42F9B88EB3AA5A40C592A94B61A7521964006AD87BE8C62C83947B39E512265E6BE034FD33E105C438685360C9868C11C5D2C54A8820CCAC'
  },
  {
    address: '0A0AD74BB014783E0FD139738B660D3AC8A5B7AE',
    pubKey: 'F8D3133A55BA2B245B328D9EF4881B5CF2AFF2DC342EB8F51C4F98799E870683',
    privKey: '9F63F7388E8076B8B451834537E936AD655C5492BB431163E1E8CA64B8075F5EF8D3133A55BA2B245B328D9EF4881B5CF2AFF2DC342EB8F51C4F98799E870683'
  },
  {
    address: '6EDED7BBE1E166AE6142A61D75F0A03D9C6779A6',
    pubKey: 'F34A1987A4AB5C4BD7C59D0E98D4691B2F91D31BD7AF4C245390653305B679D4',
    privKey: '4A7A68111CE28E156E7B22E19D27DCBE5F60C8A3034B4C86037A5B01CA5484F5F34A1987A4AB5C4BD7C59D0E98D4691B2F91D31BD7AF4C245390653305B679D4'
  },
  {
    address: '9A1ACF8635826CECF5AFC081E91272C28737DBAF',
    pubKey: '627F9E161DC9794F766A3590BF7B023585AB3EE48CA0014486C38AB879C041B3',
    privKey: 'E64F1D32B5E6A5EA9367B703668E58B8828BDCD26F88BBAA2B02BE29657603B9627F9E161DC9794F766A3590BF7B023585AB3EE48CA0014486C38AB879C041B3'
  },
  {
    address: '8EEC1A4534966346D36D4DB08CA327E9B9DD9874',
    pubKey: 'DF43388D85087DC299C81AA243DA7BA4F26585339B7A701F529CAE21928C288B',
    privKey: '258D5CA6CBD24798DBFA65DAB85FBF56F64FB25AFCB9F01EF57EA2EE0694D04DDF43388D85087DC299C81AA243DA7BA4F26585339B7A701F529CAE21928C288B'
  },
  {
    address: 'F4C93D668AAEEAC842E5A954FEA9C09E6B976656',
    pubKey: '5CDEFC58A1F441C6F2180F92F9EFB33788D5481C96286C919336C75E9E46AE34',
    privKey: '5B3478D2C911688BA332B568C5324598A7F508855EF62C1BEEBAB263AF9CC03A5CDEFC58A1F441C6F2180F92F9EFB33788D5481C96286C919336C75E9E46AE34'
  },
  {
    address: 'AE874224197C624ABD14294D4026341E244FC5DB',
    pubKey: 'F0EF15227BAD1E1F04E2B1EB0329480B583CE0DC5C1E9C6147517150490AB036',
    privKey: '6C6A5FB6A3EF2492B4147C44D4670BC96D29EDA07F6E180C8B87DEF22502E82AF0EF15227BAD1E1F04E2B1EB0329480B583CE0DC5C1E9C6147517150490AB036'
  },
  {
    address: '656A208800B82FE97B67F51BC75BA424503B0BBA',
    pubKey: 'D3C73B3CB72CBA2FCC3164661C322CC7E0E1619B9A2298434E4442213A0EABC1',
    privKey: 'D4AC583C5F083D03FAC8715E696A4CC57043DA6FB4BB91F5E8E3B4803455C29FD3C73B3CB72CBA2FCC3164661C322CC7E0E1619B9A2298434E4442213A0EABC1'
  },
  {
    address: 'FA81D90FB7483D1C7695CAC92C602991CCA944B8',
    pubKey: '6DE24E5B31CF03BEA58B602E95BC4931A166B6E26EE4CDE8913CE0E90E9BFEFB',
    privKey: '9DF78654F5E8CE98018FA2B9C8DE188CC0F78025D004503454B06C23BB7AE83F6DE24E5B31CF03BEA58B602E95BC4931A166B6E26EE4CDE8913CE0E90E9BFEFB'
  },
  {
    address: '708B5CC8C3B47E0BF5C9D9E48FCA53BA8C1CD830',
    pubKey: 'E4FDEF7C5A18C229F7A98A0C75B65801873710B78573D7B6D20D89CD2F896438',
    privKey: '7CBDE94688D36B9D3A05B9AD91152A64122B4A3BF85CF2859A47122E086CCE1AE4FDEF7C5A18C229F7A98A0C75B65801873710B78573D7B6D20D89CD2F896438'
  },
  {
    address: '443ABFC7D66C5DBDD4E55B9E9E8697926DE5EB89',
    pubKey: '9D0B7B591FDAF8F4D40D5217B6151D5C32F2282E6E027C17A671AAA7F5C045A9',
    privKey: 'D6116C8BAEFA48D277B58CF721DC0130FDF7AC286045CF4D6D7404DA43C24ABC9D0B7B591FDAF8F4D40D5217B6151D5C32F2282E6E027C17A671AAA7F5C045A9'
  },
  {
    address: '7CB6580FB4E852055A68DDC0BCACFD7D7CDB1D6C',
    pubKey: 'CCC12DF7F19DD188554D102345709521B4F9182FC1C586E64CC82FF5FA643D3E',
    privKey: '30C3E4522729FF3223F8B8AB82F306A70B1763EDE534695C2869FCA9D0DBE5F9CCC12DF7F19DD188554D102345709521B4F9182FC1C586E64CC82FF5FA643D3E'
  },
  {
    address: '951D9517349AB346DFD47B301A04037C5C18689E',
    pubKey: '11F444502FAEE4B16DF6344015F5696A3099879B1B347CFD1F19AEA9A2B64414',
    privKey: '96426FEC7814167862B63A4D3AA3F07592670493D549920CE41E5041603FF26D11F444502FAEE4B16DF6344015F5696A3099879B1B347CFD1F19AEA9A2B64414'
  },
  {
    address: 'A4178CB45ED695BDA7E0EC9829ADBAD082078BD0',
    pubKey: '42BE1E7193A7219E9357E2EA012AB882F71A062CB60FF83D6D4A00871C4AE6AD',
    privKey: '01DCBEFE33B60C8C4DF8BDD7FC71C1D0D9637CB438BEFB339B4E98781E64644842BE1E7193A7219E9357E2EA012AB882F71A062CB60FF83D6D4A00871C4AE6AD'
  },
  {
    address: 'F408BE37265BBBCBF8F17281BB148B8477927A3E',
    pubKey: '7B1400B833DFF9D3FB6121BBF349F9EFB2E519DD2B1C3EB72CF73051D7A4D3C7',
    privKey: '0EF08459947FB91F13742A3CD6F2475B8D2FCC688C792EACAC9F3CF4E02A3DF27B1400B833DFF9D3FB6121BBF349F9EFB2E519DD2B1C3EB72CF73051D7A4D3C7'
  },
  {
    address: '16A07C68697F6458C43D4846157BB3A11B1B5DCA',
    pubKey: '5B4C2FF81BE81D589E1A9CBEB280AAC6EEE8AE5FB0C774E8EE5F248E8FE62C62',
    privKey: 'E584FD2755369CFF53B5CBB4C6987FBB34058FED514EA1EF5EA66309E73CE6265B4C2FF81BE81D589E1A9CBEB280AAC6EEE8AE5FB0C774E8EE5F248E8FE62C62'
  },
  {
    address: '8B05651240631E5724CC380D7D249C1FC63F320B',
    pubKey: '1806B2C0B6E4E34945A43A8E6A105016CE0F7497717D2FA12343F5F21D675910',
    privKey: 'CC4D1982A72B78CCA1528F63A85A585E5A368532FA914EECB5BF0E82A83726571806B2C0B6E4E34945A43A8E6A105016CE0F7497717D2FA12343F5F21D675910'
  },
  {
    address: '5D41EF54CDA7A31300C5C3589FFCB24B5EF69BED',
    pubKey: '6657B916F17EAB65064757D613B18F8F357577DDB6397D286109F4DA400735C2',
    privKey: '6F60F54F9B23A18AB31B26534BCCBCE458616D1C593970039E19106BA0299B016657B916F17EAB65064757D613B18F8F357577DDB6397D286109F4DA400735C2'
  },
  {
    address: '44108478BBC09137C83D9AD32F2840A6DD706578',
    pubKey: 'FE183DAD49CD25880FBBC3CA9AC542DDB9C59B2D0B268BC0C11FB6BF40ED0103',
    privKey: '32C45A5E565EBCB6BCE78E83D361386987EE439A64F06E57447681C90F20FDD0FE183DAD49CD25880FBBC3CA9AC542DDB9C59B2D0B268BC0C11FB6BF40ED0103'
  },
  {
    address: '3EBB3571D98A6994710058D7E7466E6C03A1CBE7',
    pubKey: 'A4CCB3D1B75990AA445DFBA05446E14E74109EE0FEA6CEFC5C749C0A63DE9671',
    privKey: 'A50822EF346E4AD8F56732A1A650F32CAB6BF6651D734B6492808280AE35A686A4CCB3D1B75990AA445DFBA05446E14E74109EE0FEA6CEFC5C749C0A63DE9671'
  },
  {
    address: '2910471465B0B20333881AD27F1E06D2C42B398D',
    pubKey: '62EFD03614FB97D26DC924FCE7252398C314462F155A9BC41E8C6A5ED1FF2CB4',
    privKey: '411ACF8C6996B53ACE744B0A9798C8D009B05EC2E16DED78B9BF47478D28186B62EFD03614FB97D26DC924FCE7252398C314462F155A9BC41E8C6A5ED1FF2CB4'
  },
  {
    address: '4914F07C5A8063EA8B9247D9770B3BB70F33C3CC',
    pubKey: '2C427E9D6AF9BDB2B2712E4C8E0033F3ED30A6509439034EFA42264B34B5BD57',
    privKey: 'CC33CF131EDAFC37245BC6499C2F4E3210C9A1A8ACF65A1B1ED96CC81FF6DFED2C427E9D6AF9BDB2B2712E4C8E0033F3ED30A6509439034EFA42264B34B5BD57'
  },
  {
    address: '288289F4ACBEDF350CCC844EB847295125F742BB',
    pubKey: 'E7936B15445A8F573B50679BED3D6F3C8DF25BB4DA63A0941E744659657E7ACC',
    privKey: '9173D8EDFE238E5819698C439FB2F3F7CA0D98BB32FCA877F7A45D37F1EB8292E7936B15445A8F573B50679BED3D6F3C8DF25BB4DA63A0941E744659657E7ACC'
  }
];

describe('Generate publickey and address', function () {
  it('All the addresse must be equal to original ones!', function () {
    data.forEach(element => {

      var seed = element.privKey.substring(0, 64);

      var keyPair = tenderKeys.makeKeyPair(seed);

      var address = tenderKeys.getAddressByPubKey(keyPair.publicKey);

      expect(address).to.equal(element.address);

    });

  });
});


describe('Get address from public keys', function () {
  it('All the addresse must be equal to original ones!', function () {
    data.forEach(element => {

      var address = tenderKeys.getAddressByPubKey(element.pubKey);

      expect(address).to.equal(element.address);

    });

  });
});


describe('Get address from private keys', function () {
  it('All the addresse must be equal to original ones!', function () {
    data.forEach(element => {

      var address = tenderKeys.getAddressByPrivKey(element.privKey);

      expect(address).to.equal(element.address);

    });

  });
});

describe('Get public key from private keys', function () {
  it('All the public keys must be equal to original ones!', function () {
    data.forEach(element => {

      var pubKey = tenderKeys.getPubKeyByPrivKey(element.privKey);

      expect(pubKey).to.equal(element.pubKey);

    });

  });
});