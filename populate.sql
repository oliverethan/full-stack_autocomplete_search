

INSERT INTO drugs (d_id, name, name_code, name_generic, name_brand)
  VALUES (1234, 'Tylenol', 'Tasdsd', 'Apple', 'Banana' ),
         (1434, 'Temodil', 'Taswdsd', 'Apprle', 'Banana' ),
         (6234, 'Oplenol', 'Tasddsd', 'Apple', 'Banarna' );


INSERT INTO mechanisms (m_id, name)
VALUES  (934, 'TyBloodthinner'),
        (944, 'TeBloodthicker'),
        (865, 'ODilator');


INSERT INTO mechanismof (m_id, d_id)
VALUES  (934, 1234),
        (944, 1234),
        (865, 1234),
        (934, 1434),
        (934, 6234),
        (865, 6234);


INSERT INTO suggestions (suggestion_id, name, type)
VALUES  (1234, 'Tylenol', 'drug'),
        (1434, 'Temodil', 'drug'),
        (6234, 'Oplenol', 'drug'),
        (934, 'TyBloodthinner', 'mech'),
        (944, 'TeBloodthicker', 'mech'),
        (865, 'ODilator', 'mech');