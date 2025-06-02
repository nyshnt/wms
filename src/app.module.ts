import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { join } from 'path';
import { AddressClient, AddressClientSchema } from './models/addressClient.model';
import { Adrmst, AdrmstSchema } from './models/adrmst.model';
import { Agepfi, AgepfiSchema } from './models/agepfi.model';
import { Aisle, AisleSchema } from './models/aisle.model';
import { AisleDckloc, AisleDcklocSchema } from './models/aisle_dckloc.model';
import { AllocSearchDtl, AllocSearchDtlSchema } from './models/alloc_search_dtl.model';
import { AllocSearchGrp, AllocSearchGrpSchema } from './models/alloc_search_grp.model';
import { AllocSearchHdr, AllocSearchHdrSchema } from './models/alloc_search_hdr.model';
import { AltPrtmst, AltPrtmstSchema } from './models/alt_prtmst.model';
import { ArcCmpShipment, ArcCmpShipmentSchema } from './models/arc_cmp_shipment.model';
import { ArcCmpDtl, ArcCmpDtlSchema } from './models/arc_cmpdtl.model';
import { ArcCmpHdr, ArcCmpHdrSchema } from './models/arc_cmphdr.model';
import { ArcCstmsCnsgnmnt, ArcCstmsCnsgnmntSchema } from './models/arc_cstms_cnsgnmnt.model';
import { ArePckFlg, ArePckFlgSchema } from './models/are_pck_flg.model';
import { AreaInvsts, AreaInvstsSchema } from './models/area_invsts.model';
import { AreMst, AreMstSchema } from './models/aremst.model';
import { AssetCarton, AssetCartonSchema } from './models/asset_carton.model';
import { AssetFeature, AssetFeatureSchema } from './models/asset_feature.model';
import { AssetLink, AssetLinkSchema } from './models/asset_link.model';
import { AssetLocCap, AssetLocCapSchema } from './models/asset_loc_cap.model';
import { AssetMapMedia, AssetMapMediaSchema } from './models/asset_map_media.model';
import { AssetMapDtl, AssetMapDtlSchema } from './models/asset_mapdtl.model';
import { AssetMapmst, AssetMapmstSchema } from './models/asset_mapmst.model';
import { AssetSlot, AssetSlotSchema } from './models/asset_slot.model';
import { AssetTyp, AssetTypSchema } from './models/asset_typ.model';
import { AssetTypFeature, AssetTypFeatureSchema } from './models/asset_typ_feature.model';
import { AutoAlcRule, AutoAlcRuleSchema } from './models/auto_alc_rule.model';
import { BingCycTyp, BingCycTypSchema } from './models/bing_cyc_typ.model';
import { BingInvc, BingInvcSchema } from './models/bing_invc.model';
import { BingInvcDtl, BingInvcDtlSchema } from './models/bing_invc_dtl.model';
import { BingPrd, BingPrdSchema } from './models/bing_prd.model';
import { BingPrdDtl, BingPrdDtlSchema } from './models/bing_prd_dtl.model';
import { BingServDtl, BingServDtlSchema } from './models/bing_serv_dtl.model';
import { BldgMst, BldgMstSchema } from './models/bldg_mst.model';
import { Bomdtl, BomdtlSchema } from './models/bomdtl.model';
import { BomdtlIns, BomdtlInsSchema } from './models/bomdtl_ins.model';
import { Bomhdr, BomhdrSchema } from './models/bomhdr.model';
import { BomhdrIns, BomhdrInsSchema } from './models/bomhdr_ins.model';
import { DataAccsGrpUsr, DataAccsGrpUsrSchema } from './models/data_accs_grp_usr.model';
import { LesUsrAth, LesUsrAthSchema } from './models/les_usr_ath.model';
import { LesUsrFav, LesUsrFavSchema } from './models/les_usr_fav.model';
import { LesUsrNavBar, LesUsrNavBarSchema } from './models/les_usr_nav_bar.model';
import { LesUsrRole, LesUsrRoleSchema } from './models/les_usr_role.model';
import { PclUsrfld, PclUsrfldSchema } from './models/pcl_usrfld.model';
import { User, UserSchema } from './models/user.model';
import { UsrClientGrp, UsrClientGrpSchema } from './models/usr_client_grp.model';
import { Btoaud, BtoaudSchema } from './models/btoaud.model';
import { BtoaudDtlTbl, BtoaudDtlTblSchema } from './models/btoaud_dtl_tbl.model';
import { BulbServAreLine, BulbServAreLineSchema } from './models/bulb_serv_are_line.model';
import { Canpck, CanpckSchema } from './models/canpck.model';
import { CarMove, CarMoveSchema } from './models/car_move.model';
import { CarmtxDtl, CarmtxDtlSchema } from './models/carmtx_dtl.model';
import { CarmtxHdr, CarmtxHdrSchema } from './models/carmtx_hdr.model';
import { Client, ClientSchema } from './models/client.model';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/generatedSchema.gql'),
      sortSchema: true,
      playground: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql/graphql.ts'),
        outputAs: 'class',
      }
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('database.uri'),
      }),
      inject: [ConfigService],
    }),
    UserModule,
    MongooseModule.forFeature([
      { name: AddressClient.name, schema: AddressClientSchema },
      { name: Adrmst.name, schema: AdrmstSchema },
      { name: Agepfi.name, schema: AgepfiSchema },
      { name: Aisle.name, schema: AisleSchema },
      { name: AisleDckloc.name, schema: AisleDcklocSchema },
      { name: AllocSearchDtl.name, schema: AllocSearchDtlSchema },
      { name: AllocSearchGrp.name, schema: AllocSearchGrpSchema },
      { name: AllocSearchHdr.name, schema: AllocSearchHdrSchema },
      { name: AltPrtmst.name, schema: AltPrtmstSchema },
      { name: ArcCmpShipment.name, schema: ArcCmpShipmentSchema },
      { name: ArcCmpDtl.name, schema: ArcCmpDtlSchema },
      { name: ArcCmpHdr.name, schema: ArcCmpHdrSchema },
      { name: ArcCstmsCnsgnmnt.name, schema: ArcCstmsCnsgnmntSchema },
      { name: ArePckFlg.name, schema: ArePckFlgSchema },
      { name: AreaInvsts.name, schema: AreaInvstsSchema },
      { name: AreMst.name, schema: AreMstSchema },
      { name: AssetCarton.name, schema: AssetCartonSchema },
      { name: AssetFeature.name, schema: AssetFeatureSchema },
      { name: AssetLink.name, schema: AssetLinkSchema },
      { name: AssetLocCap.name, schema: AssetLocCapSchema },
      { name: AssetMapMedia.name, schema: AssetMapMediaSchema },
      { name: AssetMapDtl.name, schema: AssetMapDtlSchema },
      { name: AssetMapmst.name, schema: AssetMapmstSchema },
      { name: AssetSlot.name, schema: AssetSlotSchema },
      { name: AssetTyp.name, schema: AssetTypSchema },
      { name: AssetTypFeature.name, schema: AssetTypFeatureSchema },
      { name: AutoAlcRule.name, schema: AutoAlcRuleSchema },
      { name: BingCycTyp.name, schema: BingCycTypSchema },
      { name: BingInvc.name, schema: BingInvcSchema },
      { name: BingInvcDtl.name, schema: BingInvcDtlSchema },
      { name: BingPrd.name, schema: BingPrdSchema },
      { name: BingPrdDtl.name, schema: BingPrdDtlSchema },
      { name: BingServDtl.name, schema: BingServDtlSchema },
      { name: BldgMst.name, schema: BldgMstSchema },
      { name: Bomdtl.name, schema: BomdtlSchema },
      { name: BomdtlIns.name, schema: BomdtlInsSchema },
      { name: Bomhdr.name, schema: BomhdrSchema },
      { name: BomhdrIns.name, schema: BomhdrInsSchema },
      { name: DataAccsGrpUsr.name, schema: DataAccsGrpUsrSchema },
      { name: LesUsrAth.name, schema: LesUsrAthSchema },
      { name: LesUsrFav.name, schema: LesUsrFavSchema },
      { name: LesUsrNavBar.name, schema: LesUsrNavBarSchema },
      { name: LesUsrRole.name, schema: LesUsrRoleSchema },
      { name: PclUsrfld.name, schema: PclUsrfldSchema },
      { name: User.name, schema: UserSchema },
      { name: UsrClientGrp.name, schema: UsrClientGrpSchema },
      { name: Btoaud.name, schema: BtoaudSchema },
      {name: BtoaudDtlTbl.name, schema: BtoaudDtlTblSchema},
      {name: BulbServAreLine.name, schema: BulbServAreLineSchema},
      {name: Canpck.name, schema: CanpckSchema},
      {name: CarMove.name, schema: CarMoveSchema},
      {name: CarmtxDtl.name, schema: CarmtxDtlSchema},
      {name: CarmtxHdr.name, schema: CarmtxHdrSchema},
      {name:Client.name, schema: ClientSchema}
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
